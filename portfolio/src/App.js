import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
    <Main/>
    <About/>
    <Works/>
    <Contact/>
    </div>
  );
}

export default App;
