import React from 'react'
import styled from "styled-components";
import HighlightImg from "../../images/Highlight.jpg";

const Container = styled.div`
margin-top: 40px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  border-radius: 3%;
  width: 100%;
  height: 100%;
  max-width: 70%;
  max-height: 500px;
  //border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 350px;
    max-height: 400px;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export default function Highlight() {
  return (
    <Container id="Achievements">
      <Wrapper>
        <Title style={{
        marginBottom: "40px",
      }}>Key Achievements</Title>
    <Img src={HighlightImg} alt="Highlight" />
    </Wrapper><br/>
    </Container>
  )
}
