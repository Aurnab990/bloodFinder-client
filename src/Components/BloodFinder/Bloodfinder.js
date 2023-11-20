import React, { useEffect, useState } from 'react';
import '../BloodFinder/Bloodfinder.css';

const Bloodfinder = () => {
  const[users, setUsers]=useState([]);
  const [searchBloodGroup, setSearchBloodGroup] = useState('');

  const handleSearchChange = (e) => {
    setSearchBloodGroup(e.target.value);
  };

  useEffect(()=>{
    fetch('http://localhost:5000/blood')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);

  const data = [
    // Add your donor data here
  ];

  const filteredData = searchBloodGroup
    ? data.filter((donor) => donor.group.toLowerCase() === searchBloodGroup.toLowerCase())
    : data;

  return (
    <div>
      <div className="search-wrapper">
        <label htmlFor="bloodGroup">Search by Blood Group:</label>
        <input
          type="text"
          id="bloodGroup"
          value={searchBloodGroup}
          onChange={handleSearchChange}
          placeholder="Enter blood group"
        />
      </div>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Group</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {
            users.map(user=>
              <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.bloodgroup}</td>
            <td>{user.gender}</td>
            <td>{user.age}</td>
            <td>Active</td>
            <td>
              <button className="action-button">Donate</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
              )
          }
        
        
          <tbody>
            {filteredData.map((donor, index) => (
              <tr key={index}>
                <td>{donor.name}</td>
                <td>{donor.email}</td>
                <td>{donor.address}</td>
                <td>{donor.group}</td>
                <td>{donor.status}</td>
                <td>
                  <button className="action-button">Donate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bloodfinder;
