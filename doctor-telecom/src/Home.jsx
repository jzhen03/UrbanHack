import React from 'react';
import './Home.css'; 
import Slideshow from './slideshow';
import {slides} from './slideshowData.json'


function Home() {
  return (
    <>
      {/* Image Section */}
      
      <div className="image-container">
        <Slideshow data={slides}/>
      </div>
      

      {/* Features Section */}
      <div className="features-container">
        <div className="feature-card">
          <img
            src="https://icons.iconarchive.com/icons/roundicons/100-free-solid/512/target-icon.png"
            alt="Diagnosis Icon"
            className="feature-icon"
          />
          <h3>Confirm Diagnosis</h3>
          <p>Confer with our properitary MedLink Bro medical diagonsis asistant to complete and ensure effecient diagonsis to speed up simple cases</p>
        </div>

        <div className="feature-card">
          <img
            src="https://img.icons8.com/ios/452/chat.png"
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3>Chat with Other Doctors</h3>
          <p>Want a second opinion? Need advice from a specialist? Use our integrated slack messaging system to securely and easily communicate with an available specialist</p>
        </div>

        <div className="feature-card">
          <img
            src="https://img.icons8.com/ios/452/report-card.png"
            alt="Reports Icon"
            className="feature-icon"
          />
          <h3>Medical Reports and Forms</h3>
          <p>Leverage our easy-to-use communication systems with our EPIC Integration to easily access medical forms and patient data</p>
        </div>

        <div className="feature-card">
          <img
            src="https://static-00.iconduck.com/assets.00/calendar-small-icon-1863x2048-ves2yjyu.png"
            alt="Availability "
            className="feature-icon"
          />
          <h3>Hospital and Doctor Availability</h3>
          <p>Utilize our real-time hospitial heat map to make informed decisions on patient transfers and connecting patients with proper specialists</p>
        </div>
      </div>
    </>
  );
}

export default Home;
