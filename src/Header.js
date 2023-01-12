import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ gridColumn: '1/-1', textAlign: 'center' }}>
      <NavLink
        style={{
          padding: '6px',
          backgroundColor: '#202020',
          borderRadius: '4px',
          color: 'white',
          fontFamily: 'Roboto',
        }}
        to="/"
        activeStyle={{ color: 'yellow' }}
        end
      >
        Produtos
      </NavLink>{' '}
      |{' '}
      <NavLink
        style={{
          padding: '6px',
          backgroundColor: '#202020',
          borderRadius: '4px',
          color: 'white',
          fontFamily: 'Roboto',
        }}
        to="/contato"
        activeStyle={{ color: 'yellow' }}
      >
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
