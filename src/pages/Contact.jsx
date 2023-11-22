

import React, { useState } from 'react';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formValues, setFormValues] = useState({
    Name: '',
    Email: '',
    Message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
    


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzbo-nev8VwmT3VQXvsnyC_anNoF7gl56QsjWSIhgnQY0hwEzOydF8TqMhNmYTytfBT/exec'

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(document.forms['submit-to-google-sheet']),
        mode: 'no-cors'
      });

      if (response.ok) {
        setSuccessMessage('Message sent successfully');
        setFormValues({ Name: '', Email: '', Message: '' });
        setMessageSent(true);

        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      } else {
     
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <>
      <div id="contact">
        <div className="container-contact">
        <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>

              <div className="contact-info-item">
                <img src="Images/icons8-email-64.png" alt="email" />
                <p>lekiemmanuel254@gmail.com</p>
              </div>

              <div className="contact-info-item">
                <img src="Images/icons8-contact-50.png" alt="contact" />
                <p>+254702360897</p>
              </div>

              <div className="social-icons">
                <a href="#">
                  <img src="Images/icons8-facebook-50.png" alt="facebook" />
                </a>
                <a href="">
                  <img src="Images/icons8-youtube-50.png" alt="youtube" />
                </a>
                <a href="">
                  <img src="Images/icons8-instagram-50.png" alt="instagram" />
                </a>
                <a href="">
                  <img src="Images/icons8-linkedin-50.png" alt="linkedin" />
                </a>
              </div>
              <a href= './images/emmanuel.pdf' download="leki_mmanuel.pdf" className="btn btn2" rel='noopener noreferrer'>
              Download CV
                
              </a>
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name required"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email required"
                />
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
                <button
                  type="submit"
                  className="btn btn2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
              <span id="msg">{successMessage}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
