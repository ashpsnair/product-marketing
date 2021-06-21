import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Page2 from './Components/Page2/Page2';
import Page3 from './Components/Page3/Page3';
import Page4 from './Components/Page4/Page4';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Main />
      <Page2 />
      <Page3 />
      <Page4/>
      <Footer/>
      
    </div>
  );
}

export default App;
