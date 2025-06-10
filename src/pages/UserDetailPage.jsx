import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Or use native fetch
import UserProfile from '../components/UserProfile';
import LoadingSpinner from '../components/LoadingSpinner'; // Optional

function UserDetailPage() {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        // Using JSONPlaceholder for dummy user data
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user details. Please try again.');
        console.error('Error fetching user:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]); 

  if (loading) {
    return <LoadingSpinner />; 
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!user) {
    return <div className="no-user-found">No user found with ID: {id}</div>;
  }

  return (
    <div className="user-detail-page">
      <UserProfile user={user} />
    </div>
  );
}

export default UserDetailPage;