import React, { useState } from 'react';
import './Careers.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const CareerPage = () => {
  const [selectedOption, setSelectedOption] = useState('Drivers');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderDropdown = () => {
    switch (selectedOption) {
      case 'Drivers':
        return (
          <div>
            <h3>Drivers</h3>
            <ul>
              <li>Flex Driver</li>
              <li>5-ton truck driver</li>
            </ul>
          </div>
        );
      case 'Admin':
        return (
          <div>
            <h3>Admin</h3>
            <ul>
              <li>Bookkeeper</li>
            </ul>
          </div>
        );
      case 'Operations':
        return (
          <div>
            <h3>Operations</h3>
            <ul>
              <li>Dispatcher</li>
              <li>Supervisor</li>
              <li>Manager</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="career-page">
      <DropdownButton className="career-options" id="dropdown-item-button" title={selectedOption}>
        <Dropdown.Item as="button" onClick={() => handleOptionChange('Drivers')}>Drivers</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleOptionChange('Admin')}>Admin</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleOptionChange('Operations')}>Operations</Dropdown.Item>
      </DropdownButton>
      {renderDropdown()}
    </div>
  );
};

export default CareerPage;
