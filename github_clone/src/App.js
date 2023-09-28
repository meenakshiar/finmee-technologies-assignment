import AOS from "aos";
import Astrocat from "./Components/AstroCatSection/Astrocat";
import Codespace from "./Components/Codespace/Codespace";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import IssuesPlan from "./Components/IssuesPlan/IssuesPlan";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Codespace />
      <IssuesPlan />
      <Astrocat />
      <Footer />
    </div>
  );
}

export default App;
