import React from 'react';
import './Home.css';  // We will create a new CSS file for this
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
            src="https://img.icons8.com/ios/452/appointment-reminders.png" // Example icon URL
            alt="Appointment Icon"
            className="feature-icon"
          />
          <h3>Appointment Scheduling</h3>
          <p>Book appointments with doctors easily through the platform.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://img.icons8.com/ios/452/chat.png" // Example icon URL
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3>Chat with Doctors</h3>
          <p>Consult doctors remotely via our integrated chat system.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://img.icons8.com/ios/452/report-card.png" // Example icon URL
            alt="Reports Icon"
            className="feature-icon"
          />
          <h3>Medical Reports</h3>
          <p>View and manage your medical reports in one place.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://img.icons8.com/ios/452/healthy-food.png" // Example icon URL
            alt="Nutrition Icon"
            className="feature-icon"
          />
          <h3>Nutrition Advice</h3>
          <p>Get personalized nutrition plans based on your health data.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
