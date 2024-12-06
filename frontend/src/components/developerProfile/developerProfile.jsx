import React from 'react';
import './developerProfile.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

// Importing developer photos from assets folder
import developerPhoto1 from '../../assets/indrajeet.png';
import developerPhoto2 from '../../assets/arvind.png';  // Assume this is a different image

const DeveloperProfile = () => {
  return (
    <div className="developer-profile-container">
      {/* Heading for Developer Profiles */}
      <h1 className="profiles-heading">Meet Our Developers</h1>

      {/* Developer Profiles */}
      <div className="developer-profiles-container">
        {/* Developer 1 Profile */}
        <div className="developer-profile">
          <img className="developer-photo" src={developerPhoto1} alt="Indrajeet Gupta" />
          <div className="developer-details">
            <h2>Indrajeet Gupta</h2>
            <p className="developer-designation">Front-End Developer</p>
            <p className="developer-description">
              Indrajeet Gupta is a passionate developer with expertise in React, JavaScript, and modern web technologies. He loves creating user-friendly and responsive websites.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/johndoe" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://www.instagram.com/johndoe" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Developer 2 Profile */}
        <div className="developer-profile">
          <img className="developer-photo" src={developerPhoto2} alt="Arvind Chauhan" />
          <div className="developer-details">
            <h2>Arvind Chauhan</h2>
            <p className="developer-designation">Back-End Developer</p>
            <p className="developer-description">
              Arvind Chauhan specializes in Node.js, databases, and server-side applications. He is passionate about building scalable and efficient back-end systems.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100049161035512" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://www.instagram.com/_alone__arvind_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/arvind-chauhan-5b06a4299/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
