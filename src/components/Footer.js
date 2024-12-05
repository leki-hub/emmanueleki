import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="copyright">
        <p>
          ©{currentYear} Leki Emmanuel. <i className="fab fa-heart"></i> All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

