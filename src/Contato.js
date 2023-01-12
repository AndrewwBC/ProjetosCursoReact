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
  margin-top: 120px;
  animation: ${FromLeft} 0.3s linear;
`;

const Content = styled.div`
  display: flex;
  margin-top: 40px;
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

const Paragrapfh = styled.p`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 12px;
  &::before {
    content: '  ';
    width: 18px;
    height: 4px;
    top: 18px;
    left: -24px;
    background-color: #c9c9c9;
    position: absolute;
  }
`;

const Contato = () => {
  return (
    <Container>
      <Head title="Contato" />
      <Header />
      <Content>
        <Img height={600} src={foto} alt="" />
        <Info>
          <h2>Entre em contato.</h2>
          <Contact>
            <Paragrapfh>andrew@hotmail.com </Paragrapfh>
            <Paragrapfh>53 9 9191 9191</Paragrapfh>
            <Paragrapfh>Rua Ali Perto, 22</Paragrapfh>
          </Contact>
        </Info>
      </Content>
    </Container>
  );
};

export default Contato;
