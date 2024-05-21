import React, { useState } from 'react';
import './navbar.css'; // Import the CSS file for styling

const Navbar = () => {
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
              <div className="admin-info">
                <span className="admin-name">{admin.name}</span>
                <span className="admin-role">{admin.role}</span>
              </div>
            </div>
            <div className="admin-details">
              <div className="admin-role-container" onClick={() => toggleDropdown(index)}>
                <span className="dropdown-arrow">&#9662;</span> {/* Down arrow symbol */}
              </div>
              {activeIndex === index && (
                <div className="dropdown">
                  <div className="dropdown-item">
                    <img src={`${process.env.PUBLIC_URL}/manage_role_icon.png`} alt="Manage Role" className="dropdown-icon" />
                    Manage Role
                  </div>
                  <div className="dropdown-item">
                    <img src={`${process.env.PUBLIC_URL}/logout_icon.png`} alt="Log out" className="dropdown-icon" />
                    Log out
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
