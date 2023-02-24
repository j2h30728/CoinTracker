import styled from "styled-components";

export const Title = ({ text }: { text: string | undefined }) => {
  return (
    <TitleWrapper>
      <Text>{text}</Text>
    </TitleWrapper>
  );
};
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7vh;
`;
const Text = styled.h1`
  font-size: 40px;
  color: ${props => props.theme.accentColor};
`;
