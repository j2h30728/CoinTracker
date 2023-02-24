import {
  HiArrowTrendingDown,
  HiArrowTrendingUp,
  HiBars2,
} from "react-icons/hi2";
import styled from "styled-components";

export default function PriceTab({ intervalData }: { intervalData: number }) {
  return (
    <>
      <PriceItem>
        <span>한시간 전</span>
        <span>{intervalData}</span>
        <span>
          {intervalData > 0 ? "상승" : intervalData < 0 ? "하락" : "유지"}
        </span>
        <IconWrapper>
          {intervalData > 0 ? (
            <HiArrowTrendingUp fill="#e69785" />
          ) : intervalData < 0 ? (
            <HiArrowTrendingDown fill="#74b9ff" />
          ) : (
            <HiBars2 fill="black" />
          )}
        </IconWrapper>
      </PriceItem>
    </>
  );
}

const PriceItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.bgOverviewColor};
  border-radius: 10px;
  padding: 15px 40px;

  span:not(span:first-child) {
    margin-top: 9px;
  }
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  svg {
    stroke: ${props => props.theme.textColor};
    stroke-width: 0.3px;
    width: 40px;
    height: 40px;
  }
`;
