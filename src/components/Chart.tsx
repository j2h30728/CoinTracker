import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { ChartProps, Historical } from "../types/types";
import { useRecoilValue } from "recoil";
import { isDarkState } from "../atom";

export default function Chart() {
  const isDark = useRecoilValue(isDarkState);
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data: chartData } = useQuery<Historical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 50000 }
  );
  return (
    <div>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <ApexChart
            type="line"
            series={[
              {
                name: "Price",
                data: chartData?.map(price =>
                  parseFloat(price.close)
                ) as number[],
              },
            ]}
            options={{
              theme: {
                mode: isDark ? "dark" : "light",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparse",
              },
              stroke: {
                curve: "smooth",
              },
              grid: {
                show: false,
              },
              xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: {
                  show: false,
                },
                type: "datetime",
                categories: chartData?.map(price =>
                  new Date(price.time_close * 1000).toISOString()
                ),
              },
              yaxis: {
                labels: {
                  show: false,
                },
              },
              fill: {
                type: "gradient",
                gradient: {
                  gradientToColors: isDark ? ["#fad390"] : ["#e17055"],
                  stops: [0, 130],
                },
              },
              colors: isDark ? ["white"] : ["black"],
              tooltip: {
                y: {
                  formatter: value => `$${value.toFixed(1)}`,
                },
              },
            }}
          />
          <Line />
          <ApexChart
            type="candlestick"
            series={[
              {
                data: chartData?.map(price => [
                  price.time_close * 1000,
                  parseFloat(price.open),
                  parseFloat(price.high),
                  parseFloat(price.low),
                  parseFloat(price.close),
                ]) as number[][],
              },
            ]}
            options={{
              theme: {
                mode: isDark ? "dark" : "light",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "trnasparse",
              },
              stroke: {
                curve: "smooth",
              },
              plotOptions: {
                candlestick: {
                  colors: {
                    upward: "#74b9ff",
                    downward: "#fab1a0",
                  },
                },
              },
              grid: {
                show: false,
              },
              xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: {
                  show: false,
                },
                type: "datetime",
                categories: chartData?.map(price =>
                  new Date(price.time_close * 1000).toISOString()
                ),
              },
              yaxis: {
                labels: {
                  show: false,
                },
              },
              tooltip: {
                y: {
                  formatter: value => `$${value}`,
                },
              },
            }}
          />
        </>
      )}
    </div>
  );
}
const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Line = styled.hr`
  border: 5px solid ${props => props.theme.bgOverviewColor};
`;
