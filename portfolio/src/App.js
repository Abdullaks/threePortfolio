import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import styled from "styled-components";

const Container = styled.div`
  /* text-align: center; */
  height: 100vh;
  background: url("./images/bg.jpeg");
  scroll-snap-type:y madatory;
  scroll-behavior: smooth;
  color: #fff;
  overflow-y:auto;
  scrollbar-width :none ;
  &::-webkit-scrollbar{
    display: none;
  }
`;


function App() {
  return (
    <Container>
    <Main/>
    <About/>
    <Works/>
    <Contact/>
    </Container>
  );
}

export default App;
