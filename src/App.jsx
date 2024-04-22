import logo from './logo.svg';
import './App.css';
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent"
import HeadingComponent from './components/HeadingsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HeadingComponent text="Sono la prima intestazione" className="firstHeading" />
        <HeadingComponent text="Sono la seconda intestazione" className="secondHeading" />

   <ButtonComponent text= "Bottone 1" className="buttonColor " />
   <ButtonComponent text= "Bottone 2" className="buttonColor2 " />


   <ImageComponent src = "https://staticfanpage.akamaized.net/wp-content/uploads/sites/12/2015/12/vacanze-in-montagna-in-veneto.jpg" alt="immagine montagna" className="imgStyle"/>
      </header>
    </div>
  );
}

export default App;
