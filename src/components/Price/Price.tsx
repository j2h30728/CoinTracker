import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { PriceProps } from "../../types/types";
import PriceTab from "./PriceTab";

export default function Price() {
  const { ticker } = useOutletContext<PriceProps>();
  return (
    <Container>
      {[
        ticker?.quotes.USD.percent_change_1h,
        ticker?.quotes.USD.percent_change_24h,
        ticker?.quotes.USD.percent_change_7d,
        ticker?.quotes.USD.percent_change_30d,
      ].map(tap => (
        <PriceTab intervalData={tap} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
