import React, { useState, useEffect } from "react";
import { headerImages } from "../../assets/assets"; // Assuming you have a folder with header images
import "./Header.css"; // Importing the CSS file

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === headerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${headerImages[currentImageIndex]})`, // Dynamically set background image
      }}
    >
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Satisfy your cravings with our diverse menu crafted with the finest
          ingredients.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
