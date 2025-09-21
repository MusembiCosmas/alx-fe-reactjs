import React from 'react';

function UserProfile({ name = "Jane Doe", age = 25, bio = "A passionate developer." }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', maxWidth: '480px' }}>
      <h2 style={{ color: 'blue', fontSize: '1.2rem', margin: '0 0 8px' }}>{name}</h2>
      <p style={{ margin: '4px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p style={{ margin: '6px 0', color: '#333' }}>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
