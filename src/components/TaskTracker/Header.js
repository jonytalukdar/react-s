import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onShowToggle, showTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showTask ? 'Close' : 'Add'}
        color={showTask ? 'green' : 'blue'}
        onClick={onShowToggle}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  onShowToggle: PropTypes.func.isRequired,
  showAddTask: PropTypes.bool,
};

export default Header;
