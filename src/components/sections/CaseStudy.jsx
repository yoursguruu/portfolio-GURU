import React, { useState } from "react";
import styled from "styled-components";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import CaseStudy1 from "../../images/1.jpg";
import CaseStudy2 from "../../images/2.jpg";
import CaseStudy3 from "../../images/3.jpg";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.4s ease-in-out;
  transform: ${({ currentSlide, totalSlides }) => 
    `translateX(-${(currentSlide % totalSlides) * 100}%)`};
`;

const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  border-radius: 3%;
  width: 100%;
  height: auto;
  max-width: 900px;
  max-height: 500px;

  @media (max-width: 960px) {
    max-width: 500px;
    max-height: 350px;
  }

  @media (max-width: 640px) {
    max-width: 300px;
    max-height: 250px;
  }
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: 10px" : "right: 10px")};
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.primary || "#007BFF"};
  color: white;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover || "#0056b3"};
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 12px;
  }
`;

const CaseStudy = () => {
  const images = [
    CaseStudy2,
    CaseStudy3,
    CaseStudy1,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      (prevSlide - 1 + totalSlides) % totalSlides
    );
  };

  return (
    <Container id="CaseStudy">
      <Title>Case Study</Title>
      <Wrapper>
        <Carousel currentSlide={currentSlide} totalSlides={totalSlides}>
          {images.map((src, index) => (
            <Slide key={index}>
              <Img src={src} alt={`Case Study ${index + 1}`} />
            </Slide>
          ))}
        </Carousel>
        <Button left onClick={prevSlide}>
          <ArrowBack style={{ fontSize: "30px", color: "white" }} />
        </Button>
        <Button onClick={nextSlide}>
          <ArrowForward style={{ fontSize: "30px", color: "white" }} />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default CaseStudy;
