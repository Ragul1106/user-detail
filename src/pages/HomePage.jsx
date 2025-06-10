import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  // You can fetch a list of users here from an API
  // For demonstration, let's just create some dummy links
  const userIds = [1, 2, 3, 4, 5]; // Example user IDs

  return (
    <div className="home-page">
      <h1>Welcome to the User Profile App!</h1>
      <p>Select a user to view their profile:</p>
      <ul className="user-list">
        {userIds.map((id) => (
          <li key={id}>
            <Link to={`/user/${id}`}>User {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;