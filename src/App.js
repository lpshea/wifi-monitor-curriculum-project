import React, { useState, useEffect } from 'react';
import './App.css';
import WifiStatus from './components/wifistatus/wifistatus';
import MapDisplay from './components/map/mapdisplay';
import Location from './components/location/location';
import UserList from './components/UserList';

function App() {
  const [formData, setFormData] = useState({
    location: '',
    wifiStatus: ''
  });

  const [users, setUsers] = useState([]);

  const handleLocationChange = (location) => {
    setFormData((prevData) => ({ ...prevData, location }));
  };

  const handleSubmit = async (wifiStatus) => {
    setFormData((prevData) => ({ ...prevData, wifiStatus }));

    try {
      const response = await fetch('http://localhost:2024/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location: formData.location, wifiStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const result = await response.json();
      console.log('Submission successful:', result);
      setFormData({ location: '', wifiStatus: '' });

      fetchUsers();
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/get-users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header>
        <p className="title">IS YOUR WIFI GARBAGE? LET US KNOW:</p>
      </header>
      <div className="page">
        <MapDisplay />
        <div className="rightSide">
          <Location onLocationChange={handleLocationChange} />
          <WifiStatus onSubmit={handleSubmit} formData={formData} />
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
