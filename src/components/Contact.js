import React from 'react';

const Contact = () => {
  return (
    <div className="slide" id="4">
      <div className="content fourth-content">
        <div className="container-fluid">
          <h1>Contact page</h1>
        </div>
      </div>
    </div>
  );
};

const Contat = () => {
  return (
    <div className="slide" id="5">
      <div className="content fifth-content">
        <div className="container-fluid">
          <div id="map">
            {/* -- How to change your own map point
            1. Go to Google Maps
            2. Click on your location point
            3. Click "Share" and choose "Embed map" tab
            4. Copy only URL and paste it within the src="" field below
    --*/}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945"
              width="100%"
              height="500px"
              frameBorder="0"
              style="border:0"
              allowFullScreen
            />
          </div>
          <div className="col-md-6">
            <form id="contact" action="" method="post">
              <div className="row">
                <fieldset>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your name..."
                    required=""
                  />
                </fieldset>
                <fieldset>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your email..."
                    required=""
                  />
                </fieldset>
                <fieldset>
                  <input
                    name="subject"
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject..."
                    required=""
                  />
                </fieldset>
                <fieldset>
                  <textarea
                    name="message"
                    rows="6"
                    className="form-control"
                    id="message"
                    placeholder="Your message..."
                    required=""
                  />
                </fieldset>
                <fieldset>
                  <button type="submit" id="form-submit" className="btn">
                    Send Now
                  </button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
