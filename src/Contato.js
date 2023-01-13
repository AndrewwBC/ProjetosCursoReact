import React from 'react';
import foto from './img/contato.jpg';
import Header from './Header';
import Head from './Head';
import styled, { keyframes } from 'styled-components';

const FromLeft = keyframes`
  from {
    transform: translateX(-20px);
  }

  to {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  animation: ${FromLeft} 0.3s linear;
`;

const Content = styled.div`
  display: flex;
  margin-top: 60px;
  gap: 32px;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 4px;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
`;

const Links = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-left: 12px;
  margin-bottom: 18px;
  font-family: 'Poppins';
  &::before {
    content: '  ';
    width: 16px;
    height: 2px;
    top: 18px;
    left: -26px;
    background-color: #303030;
    position: absolute;
  }
`;

const Contato = () => {
  return (
    <Container>
      <h1
        style={{
          gridColumn: '1/-1',
          textAlign: 'center',
          marginBottom: '60px',
        }}
      >
        CONTATO
      </h1>
      <Head title="Contato" />
      <Header />
      <Content>
        <Img height={600} src={foto} alt="" />
        <Info>
          <h2>Entre em contato.</h2>
          <Contact>
            <Links href="mailto:andrew@hotmail.com">andrew@hotmail.com </Links>
            <Links href="te:5399999999">53 9 9191 9191</Links>
            <Links href="https://www.google.com">Rua Ali Perto, 22</Links>
          </Contact>
        </Info>
      </Content>
    </Container>
  );
};

export default Contato;
