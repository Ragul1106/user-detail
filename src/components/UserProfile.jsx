import React from 'react';

function UserProfile({ user }) {
  if (!user) {
    return <div className="profile-placeholder">Select a user to view their profile.</div>;
  }

  return (
    <div className="user-profile-card">
      <h2>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      {user.address && (
        <div className="address-section">
          <h3>Address:</h3>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
        </div>
      )}
      {user.company && (
        <div className="company-section">
          <h3>Company:</h3>
          <p><strong>Name:</strong> {user.company.name}</p>
          <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
          <p><strong>BS:</strong> {user.company.bs}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;