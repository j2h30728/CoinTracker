import styled from "styled-components";
import Coins from "../components/Coins";

export default function Home() {
  return (
    <Container>
      <Coins />
    </Container>
  );
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
