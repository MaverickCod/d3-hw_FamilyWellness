import React from 'react';
import './Body.css';
import familyimage from './image/family.jpg';

function Body() {
  return (
    <div className="body">
      <div className="image-section">
        <img src={familyimage} alt="Family enjoying beach" />
      </div>
      <div className="promo-section">
        <h2>Think Health. Think Massage.</h2>
        <p>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
        <div className="promo-buttons">
          <button>LEARN MORE ABOUT US</button>
          <button>CONTACT US TODAY</button>
        </div>
      </div>
      <div className="info-section">
        <p id='red-text' style={{ color: 'red' }}>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
        <p>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
        <p>We welcome you to come explore all the benefits you’ll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.</p>
      </div>
      <hr /> {/* Add this line to create a horizontal line */}
      <div className="contact-info">
        <p  id='red-text' style={{ color: 'red' }}>Family Wellness Massage Therapy</p>
        <p>9876 Main Street, Suite 123, Mainland, ML12345</p>
        <p>Phone: 987-654-3210</p>
      </div>
    </div>
  );
}

export default Body;
