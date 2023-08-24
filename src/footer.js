import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#BB2525',
  
    padding: '20px',
    textAlign: 'center',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <footer style={footerStyle}>
      <p>Connect with us on:</p>
      <div className="social-links">
        <a href="https://github.com/person1" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub - Person 1</a>
        <a href="https://github.com/person2" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub - Person 2</a>
        <a href="https://www.linkedin.com/in/person1" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn - Person 1</a>
        <a href="https://www.linkedin.com/in/person2" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn - Person 2</a>
      </div>
    </footer>
  );
}

export default Footer;
