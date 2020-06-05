import React from 'react';

const Contact = () => {
  return (
    <div className="slide" id="5">
      <div className="content contact">
        <div id="map" className="contact-image">
          {/* How to change your own map point
              1. Go to Google Maps
              2. Click on your location point
              3. Click "Share" and choose "Embed map" tab
              4. Copy only URL and paste it within the src="" field below
              */}
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3974.4420409999734!2d8.340729409255468!3d5.031833654537036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d7d0efa569cb5%3A0xdc7d76ba7ce5ed9a!2sEmmanuel%20Edem%20Cres%2C%20Calabar!5e0!3m2!1sen!2sng!4v1586912424342!5m2!1sen!2sng" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
            width="100%"
            height="500px"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            title="location"
          />
        </div>
        <div className="contact-text">
          <form id="contact" className="contact-text__form">
            <input
              name="name"
              className="contact-text__form-field"
              type="text"
              id="name"
              placeholder="Your name..."
              required
            />

            <input
              name="email"
              className="contact-text__form-field"
              type="email"
              id="email"
              placeholder="Your email..."
              required
            />

            <input
              name="subject"
              className="contact-text__form-field"
              type="text"
              id="subject"
              placeholder="Subject..."
              required
            />

            <textarea
              name="message"
              className="contact-text__form-field"
              rows="6"
              id="message"
              placeholder="Your message..."
              required
            />

            <button
              className="contact-text__form-btn"
              id="form-submit"
              name="btn"
              type="submit"
            >
              Send Now
            </button>
          </form>
          <div className="contact__social">
            <p>Connect with me on social media:</p>
            <ul className="contact__social-icon-container">
              <li className="contact__social-icon">
                <a
                  href="https://github.com/samodum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fab fa-github" />
                </a>
              </li>
              <li className="contact__social-icon">
                <a
                  href="https://linkedin.com/in/samodum/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fab fa-linkedin" />
                </a>
              </li>
              <li className="contact__social-icon">
                <a
                  href="http://twitter.com/samodum1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fab fa-twitter" />
                </a>
              </li>
              <li className="contact__social-icon">
                <a
                  href="https://facebook.com/SamOdum2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fab fa-facebook" />
                </a>
              </li>
              <li className="contact__social-icon">
                <a
                  href="https://dev.to/samodum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fab fa-dev" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
