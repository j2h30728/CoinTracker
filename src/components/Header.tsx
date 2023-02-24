import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isDarkState } from "../atom";
import { HiSun, HiMoon } from "react-icons/hi2";

export default function Header() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const handleDarkmode = () => {
    setIsDark(!isDark);
  };
  return (
    <Container>
      <Title to="">Coin Tracker</Title>
      <DarkmodeBtn onClick={handleDarkmode}>
        {isDark ? <HiSun /> : <HiMoon />}
      </DarkmodeBtn>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 30px;
`;
const Title = styled(Link)`
  font-size: 20px;
  color: ${props => props.theme.accentColor};
`;
const DarkmodeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    fill: ${props => props.theme.textColor};
  }
`;
