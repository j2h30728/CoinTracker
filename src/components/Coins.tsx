import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { ICoin } from "../types/types";
import { Title } from "./Common";

export default function Coins() {
  const { data: coins, isLoading } = useQuery<ICoin[]>(
    ["allCoins"],
    fetchCoins
  );
  return (
    <>
      <Title text={isLoading ? "LOADING" : "Coins"} />
      {isLoading ? (
        "Loading..."
      ) : (
        <CoinList>
          {coins?.slice(0, 100).map(coin => (
            <Coin key={coin.id}>
              <Link to={coin.id} state={{ coinId: coin.id, name: coin.name }}>
                <Img
                  src={
                    coin.symbol &&
                    `https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`
                  }
                  alt="Coin Symbol"
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </>
  );
}

const CoinList = styled.ul``;
const Coin = styled.li`
  background-color: ${props => props.theme.darkBgColor};
  color: ${props => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
