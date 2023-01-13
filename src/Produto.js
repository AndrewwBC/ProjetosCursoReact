import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Header from './Header';
import Head from './Head';
import PropTypes from 'prop-types';
const Produto = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [title, setTitle] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  const FromLeft = keyframes`
  from {
    transform: translateX(-20px);
  }

  to {
    transform: translateX(0);
  }
`;

  const Products = styled.div`
    display: grid;
    max-width: 1000px;
    gap: 32px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    animation: ${FromLeft} 0.3s linear;
    &:hover {
      scale: calc(1.05);
      transition: 0.5s;
    }
  `;

  const NameProd = styled.h3`
    font-size: 24px;
    margin-left: 24px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    &::before {
      content: ' ';
      width: 12px;
      height: 12px;
      background-color: #fdc705;
      position: absolute;
      border-radius: 4px;
      left: -16px;
    }
  `;

  const Img = styled.img`
    display: block;
    max-width: 100%;
    border-radius: 4px;
    object-fit: cover;
    cursor: pointer;
  `;

  if (produtos === null) return null;

  function handleClick({ target }) {}

  return (
    <Products>
      <Head title="Produtos" />
      <h1 style={{ gridColumn: '1/-1', textAlign: 'center' }}>PRODUTOS</h1>
      <Header />
      {produtos.map((produto) => (
        <NavLink to={'specs/' + produto.nome}>
          <Container key={produto.id} onClick={handleClick}>
            <Img
              width={280}
              height={400}
              src={produto.fotos[0].src}
              alt={produto.fotos[0].titulo}
            />

            <NameProd>{produto.nome}</NameProd>
          </Container>
        </NavLink>
      ))}
    </Products>
  );
};

export default Produto;
