import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
`;
const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;

const List = styled.ul`
  gap: 30px;
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Search = styled.img`
  cursor: pointer;
  width: 20px;
`;

const Button = styled.button`
  width: 100px;
  color: white;
  padding: 10px;
  background-color: #da4ea2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const NavBar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./logo192.png"></Logo>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
          </List>
        </Links>
        <Icons>
          <Search src="./images/search.png"></Search>
          <Button>Button</Button>
        </Icons>
      </Container>
    </Section>
  );
};
