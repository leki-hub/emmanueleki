import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
           
              <img src={`${process.env.PUBLIC_URL}/Images/IMG_9771.png`} className="about"  alt="about" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>Hi, my name is Leki Emmanuel  and I am a Full Stack Developer. I have always been fascinated by the power of technology to solve complex problems and make people's lives easier.Over the years I have gained extensive experience in developing web and software application
                for various platforms,including web,mobile and desktop. <br /><br /> I am Proficient in wide range of programming languages including Python, JavaScript and PHP. I have worked with various frameworks and libraries such as React, Vuejs, Inertia, AlpineJs, Nodejs,ExpressJs,Python, PHP and Laravel.I have experience working with databases such as MongoDB,Firebase,MySQL and PostgreSQL.
                  <br />
                  <br />
                    I am passionate about creating quality software that is both user friendly and robust.I believe in agile development and continuous integration practices  and ensure that the web or the software I develop meets the highest standards of quality and performance.
                    </p>
              <div className="tab-titles">
                <p
                  className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                  onClick={() => handleTabClick('skills')}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                  onClick={() => handleTabClick('experience')}
                >
                  Experience
                </p>
                <p
                  className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                  onClick={() => handleTabClick('education')}
                >
                  Education
                </p>
              </div>
              {/* ... */}
              <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                            <li><span>Front-end and Back-end development Skills</span><br  />Creating and developing user interfaces using HTML,CSS and JavaScript.Strong understanding of server-side programming languages such as Node.js,Python,PHP,Laravel and Livewire.</li>
                            <li><span>Web Application</span><br /> Strong understanding of web application architecture,including client-side and server-side architecture.</li>
                            <li><span>Problem Solving</span><br />Able to analyze problems and find efficient solution.</li>
                            <li><span>Soft skills</span><br />I have good communication and collaboration skills.</li>
                        </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                     <li><span>2023 -2024</span><br />TechMpigo software development</li>
                     <li><span>2022 - 2023</span><br />ALX Bootcamp software developer trainee</li>
                     <li><span>2021 - present</span><br />Solar Power Energy Solutions</li>
                            
                 </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                  <li><span>2017 - 2021</span><br />Bsc in Actuarial Science and Mathematics  at The Catholic University of Eastern Africa</li>
                  <li><span>2013 - 2016</span><br /> Secondary at Illasit  High School.</li>
                  <li><span>2005 - 2011</span><br />Primary at Inkisanjani.</li>
               </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;



