import React from 'react';
import styled from 'styled-components';

interface EscenaProps {
  texto: string;
  resaltado?: boolean;
}

const StyledEscena = styled.p<{ resaltado?: boolean }>`
  font-size: 18px;
  text-align: center;
  border-radius: 30px;
  border: 2px solid black;
  color: ${({ resaltado }) => (resaltado ? 'black' : 'black')};
  background-color: ${({ resaltado }) => (resaltado ? 'salmon' : 'transparent')};
  padding: 1em;
  margin: 20px;
`;

const Escena: React.FC<EscenaProps> = ({ texto, resaltado }) => {
  return <StyledEscena resaltado={resaltado}>{texto}</StyledEscena>;
};

export default Escena;

