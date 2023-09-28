import Astrocat from "./Components/AstroCatSection/Astrocat";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <Home />
      <Astrocat />
      <Footer />
    </div>
  );
}

export default App;
