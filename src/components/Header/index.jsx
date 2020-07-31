import React from 'react';
import PropTypes from 'prop-types';

// import s from './Header.module.scss';

const Header = ({ children }) => {
  return (
    <h1>
        {children}
    </h1>
  );
}

Header.defaultProps = {
  children: ''
};

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
