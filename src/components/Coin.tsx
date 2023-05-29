import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { CoinProps } from "../types/types";
import baseURL from "../baseURL";

export default function Coin({ coinId, state, info, ticker }: CoinProps) {
  const chartMatch = useMatch(`${baseURL}/${coinId}/chart`);
  const priceMatch = useMatch(`${baseURL}/${coinId}/price`);

  return (
    <>
      {info.isLoading ? (
        <Loader>Loaing...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank</span>
              <span>{info.data?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol</span>
              <span>{info.data?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price</span>
              <span>${ticker.data?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{info.data?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total supply</span>
              <span>{ticker.data?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>max supply</span>
              <span>{ticker.data?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to="chart">Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to="price">Price</Link>
            </Tab>
          </Tabs>
        </>
      )}
    </>
  );
}

const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.bgOverviewColor};
  border-radius: 10px;
  padding: 10px 25px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.div`
  margin: 20px 0px;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  grid-gap: 10px;
`;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bgOverviewColor};
  border-radius: 10px;
  padding: 8px 0;
  color: ${props =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  text-transform: uppercase;
`;
