import React from 'react';
import './scrollup.css'; // Import the external CSS file for styling
import { RiArrowUpSLine } from 'react-icons/ri'; // Import the scroll-up arrow icon from react-icons/ri

const ScrollUp = () => {
  // Add a scroll event listener to show/hide the scroll-to-top button
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  });

  return (
    <a href="#" className="scrollup"> {/* Create an anchor link for scrolling to top */}
      <div className="scrollup__icon"> {/* Create a div for the scroll-up icon */}
        <RiArrowUpSLine /> {/* Render the scroll-up arrow icon */}
      </div>
    </a>
  );
}

export default ScrollUp; // Export the ScrollUp component as the default export
