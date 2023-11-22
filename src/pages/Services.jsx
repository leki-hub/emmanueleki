// Services.js

import React from 'react';

const Services = () => {
  return (
    <>
     <div id="services">
    <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
            <div>
                <h2>Web Design and Development</h2>
                <p><ul><li>Developing the front-end of a web application.(creating user interface,designing the layout and implementing user interactions using HTML5,CSS3,JavaScript and Reactjs)</li>
                    <li>Developing the back-end of a web application.This involves setting up the server,creating the database schema and implementing languages such as Python, Node.js and ExpressJs.</li> 
                </ul></p>
                    <a href="#">learn more</a>
            </div>
            <div>
                <h2>Database and Maintenance</h2>
                <ul><li>I deploy the application to a server,setup continuous integration and deployment and maintain the application to ensure it runs smoothly and stays up-to-date with the latest technologies.</li></ul>
                    <a href="#">learn more</a>
            </div>
            <div>
                <h2>Security</h2>
                <p><ul><li>I implement security measures to protect the application from attacks such as SQL injection,cross-site scripting and cross-site request forgery</li></ul></p>
                    <a href="#">learn more</a>
            </div>
            <div>
                <h2>Other</h2>
                <p><ul><li>Help businesses and organisations build high quality web applications and softwares.</li>
                
            <li>Building APIs(Application Programming interfaces) allowing different application to communicate with each other,Building an API that can be used by other applications to acces data or functionality of the application.</li></ul></p>
            <ul><li>Designing Payment intergration on given API endpoints.</li></ul>
                    <a href="#">learn more</a>
            </div>

        </div>
    </div>
   </div>
    </>
  );
};

export default Services;

