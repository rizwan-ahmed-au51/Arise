import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Routing from './Routing';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (

    <div className='App'>
      <Header />
      <Routing />
      <Footer />
    </div>

  );
}

export default App;
