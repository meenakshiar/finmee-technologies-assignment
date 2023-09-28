import React from 'react';
import './home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home__container"> {/* Create a container div with a class name */}
      <div className="home__content grid"> {/* Create a content div with class names */}
        <div >
          <h1 data-aos="fade-up">
            Data-powered solutions
            <br />
            for Industrial Excellence
          </h1>
          <button>
            Read More
          </button>
        </div>
        <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" /> {/* Display an image */}
      </div>
    </div>
  );
}

export default Home; // Export the Home component as the default export
