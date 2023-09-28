import './App.css';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';
import ScrollUp from './Components/scrollup/ScrollUp';
// import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
