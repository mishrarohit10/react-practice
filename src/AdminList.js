import React, { useState } from 'react';
import './AdminList.css'; // Import the CSS file for styling

const AdminList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const admins = [
    { name: 'Ajay', role: 'Admin' },
    { name: 'Arvind Kumar', role: 'Admin' }
  ];

  return (
    <div className="admin-list">
      <h2>Admin</h2>
      <div className="admin-items">
        {admins.map((admin, index) => (
          <div key={index} className="admin-item">
            <div className="admin-avatar-name">
              <img src={`${process.env.PUBLIC_URL}/avatar_icon.png`} alt="Avatar" className="admin-avatar" />
              <span className="admin-name">{admin.name}</span>
            </div>
            <div className="admin-details">
              <div className="admin-role-container" onClick={() => toggleDropdown(index)}>
                <span className="admin-role">{admin.role}</span>
                <span className="dropdown-arrow">&#9662;</span> {/* Down arrow symbol */}
                {activeIndex === index && (
                  <div className="dropdown">
                    <div className="dropdown-item">Admin</div>
                    <div className="dropdown-item">User</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminList;
