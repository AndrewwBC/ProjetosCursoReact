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
          color: '#c9c9c9',
          fontFamily: 'Roboto',
          marginRight: '12px',
        }}
        to="/"
        activeStyle={{ color: 'white', backgroundColor: '#101010' }}
        end
      >
        Produtos
      </NavLink>

      <NavLink
        style={{
          padding: '6px',
          backgroundColor: '#202020',
          borderRadius: '4px',
          color: '#c9c9c9',
          fontFamily: 'Roboto',
        }}
        to="/contato"
        activeStyle={{ color: 'white', backgroundColor: '#101010' }}
      >
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
