import { useEffect } from 'react';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';
import ScrollUp from './Components/scrollup/ScrollUp';
import AOS from "aos";

// Main App component
function App() {
  // Initialize AOS library when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Render the application components
  return (
    <div>
      <Header />    {/* Render the header component */}
      <Home />      {/* Render the home component */}
      <Services />  {/* Render the services component */}
      <Footer />    {/* Render the footer component */}
      <ScrollUp />  {/* Render the scroll-up component */}
    </div>
  );
}

export default App;
