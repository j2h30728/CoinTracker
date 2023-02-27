import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoin, fetchTicker } from "../api";
import Coin from "../components/Coin";
import { Title } from "../components/Common";
import { InfoData, RouterState, TickersData } from "../types/types";

export default function Detail() {
  const { coinId } = useParams();
  const { state } = useLocation() as RouterState;
  const info = useQuery<InfoData>(["info", coinId], () => fetchCoin(coinId));

  const ticker = useQuery<TickersData>(
    ["ticker", coinId],
    () => fetchTicker(coinId),
    { refetchInterval: 50000 }
  );
  return (
    <Container>
      <Helmet>
        <title>
          {state?.name
            ? `${state.name} | CoinTracker`
            : info.isLoading
            ? "Loading..."
            : `${info.data?.name} | CoinTracker`}
        </title>
      </Helmet>
      <Title
        text={
          state?.name
            ? state.name
            : info.isLoading
            ? "Loading..."
            : info.data?.name
        }
      />
      <Coin coinId={coinId} state={state} info={info} ticker={ticker} />
      <Outlet context={{ coinId, ticker: ticker.data }} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
