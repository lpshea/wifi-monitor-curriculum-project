import React from 'react';

const getStatusScore = (status) => {
  switch (status) {
    case 'Stable':
      return 3;
    case 'Somewhat Stable':
      return 2;
    case 'Unstable':
      return 1;
    default:
      return 0;
  }
};

const computeAggregatedScore = (data, location) => {
  const filteredData = data.filter((user) => user.location === location);
  if (filteredData.length === 0) return 'No data available';

  const total = filteredData.reduce((sum, user) => sum + getStatusScore(user.wifiStatus), 0);
  return (total / filteredData.length).toFixed(2);
};

function UserList({ users }) {
  return (
    <div>
      <h3>User Submissions</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.location} - {user.wifiStatus}
          </li>
        ))}
      </ul>

      <h3>Aggregated Scores</h3>
      <p>ASUC Student Union: {computeAggregatedScore(users, 'ASUC Student Union')}</p>
      <p>Dwinelle Hall: {computeAggregatedScore(users, 'Dwinelle Hall')}</p>
      <p>Moffitt Library: {computeAggregatedScore(users, 'Moffitt Library')}</p>
    </div>
  );
}

export default UserList;
