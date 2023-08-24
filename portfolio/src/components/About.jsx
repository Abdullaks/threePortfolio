import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const SubTitle = styled.h2`
  color: #da4ea2;
`;
const Description = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Left>{/* 3dmodel */}</Left>
        <Right>
          <Title>Main title</Title>
          <WhatWeDo>
            <Line src="./images/line.png" />
            <SubTitle>sub title</SubTitle>
          </WhatWeDo>
          <Description>description</Description>
          <Button>Button</Button>
        </Right>
      </Container>
    </Section>
  );
};
export default About;
