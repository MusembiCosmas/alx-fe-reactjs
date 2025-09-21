import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#222', color: '#fff', textAlign: 'center', padding: '12px', marginTop: '20px' }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
