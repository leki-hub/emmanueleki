
import React from 'react';

const Portfolio = () => {
  return (
    <div id="portfolio">
    <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="worklist">
            <div className="work">
          
                <img src={`${process.env.PUBLIC_URL}/Images/work-1.png`} alt="media" />

                <div className="layer">
                    <h3>Law Firm Application</h3>
                    <p>As a freelance website developer, I crafted several  amazing software applications, one being Lesmo Law firm.This application is not only user friendly
                        but also easy to configure with the backend.
                    </p>
                    <a href="https://leki-hub.github.io/lesmo-lawfirm/" rel="noreferrer"  target='_blank'>
            
                    <img src={`${process.env.PUBLIC_URL}/Images/icons8-external-link-24.png`} className="jm"  alt="external-link" />

                    </a>
                </div>
            </div>
            <div className="work">
            
                <img src={`${process.env.PUBLIC_URL}/Images/work-2.png`} className="jm"  alt="bookstore" />
                <div className="layer">
                    <h3>Bookstore Application</h3>
                    <p>The Application enables  individuals have a list of books they like,with ability to add new book, delete and 
                        update the books.
                        Every Client has a different MongoDB url assigned in the backend, with deployment done on Heroku.
                    </p>
                    <a href="https://github.com/leki-hub/mern-bookstore" rel="noreferrer"  target='_blank'> <img src={`${process.env.PUBLIC_URL}/Images/icons8-external-link-24.png`} className="jm"  alt="external-link" /></a>
                </div>
            </div>
            <div className="work">
              
                <img src={`${process.env.PUBLIC_URL}/Images/work-3.png`} className="jm"  alt="camping" />
                <div className="layer">
                    <h3>Camping App</h3>
                    <p>Being from Kenya, I prety well understand  the benefits that Tourism has impacted on the Economy.
                       I developed a camping application website template.
                    </p>
                    <a href="https://camping-app-leki.netlify.app" rel="noreferrer"  target='_blank'> <img src={`${process.env.PUBLIC_URL}/Images/icons8-external-link-24.png`} className="jm"  alt="external-link" /></a>
                </div>
            </div>
            <div className="work">
              
              <img src={`${process.env.PUBLIC_URL}/Images/rock.jpg`} className="jm"  alt='movie' />
              <div className="layer">
                  <h3>Movie App</h3>
                  <p>A movie application, developed using React framework and utilizing the react-redux for state management.
                     This application uses the OMDb movies API.
                  </p>
                  <a href="https://leki-hub.github.io/redux-movie-app/" rel="noreferrer"  target='_blank'> <img src={`${process.env.PUBLIC_URL}/Images/icons8-external-link-24.png`} className="jm"  alt="external-link" /></a>
              </div>
          </div>

        </div>
        <a href="https://github.com/leki-hub" target='_blank'rel="noreferrer"  className="btn">See more</a>
    </div>
    </div>
  );
};

export default Portfolio;
