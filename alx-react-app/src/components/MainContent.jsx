import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f7f9fc', minHeight: '140px' }}>
      <h2 style={{ marginTop: 0 }}>Main Content</h2>
      <p style={{ color: '#444' }}>This is the main content area — add text or components here.</p>
      <div style={{ marginTop: '12px' }}>
        <UserProfile name="Alice" age={25} bio="Loves hiking and outdoor adventures." />
      </div>
    </main>
  );
}

export default MainContent;
