import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Head from './Head';

const Specs = () => {
  const params = useParams();
  const [specs, setSpecs] = React.useState(null);
  const flow = useNavigate();

  if (window.location.href === `http://localhost:3000/specs/${params.nome}`) {
    document.onclick = ({ target }) => {
      if (target.src !== specs.fotos[0].src) {
        flow('/');
      }
    };
  }

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.nome}`).then(
      (r) => r.json().then((json) => setSpecs(json)),
    );
  }, []);
  if (specs === null) return null;

  const Container = styled.div`
    display: flex;
    max-width: 800px;
    gap: 48px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 48px;
  `;

  const Infos = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Img = styled.img`
    display: block;
    max-width: 100%;
    border-radius: 8px;
    cursor: pointer;
    object-fit: cover;
    transition: 0.2s;
    &:hover {
      scale: calc(1.02);
      transition: 0.3s;
    }
  `;

  const Name = styled.h3`
    font-size: 24px;
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

  const Preco = styled.p`
    font-size: 18px;
    color: #202020;
    font-family: 'Poppins';
    font-weight: bold;
    padding: 12px 18px;
    background-color: #fdc705;
    max-width: max-content;
    border-radius: 4px;
  `;

  const Desc = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
  `;

  return (
    <>
      <Head title="Specs" />
      <Container>
        <Img width={400} src={specs.fotos[0].src}></Img>
        <Infos>
          <Name>{specs.nome}</Name>
          <Desc>{specs.descricao}</Desc>
          <Preco>R$ {specs.preco}</Preco>
        </Infos>
      </Container>
    </>
  );
};

export default Specs;
