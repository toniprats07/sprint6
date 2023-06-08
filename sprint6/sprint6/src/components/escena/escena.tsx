import React from 'react';
import styled from "styled-components";

interface EscenaProps {
    texto: string;
  }

const StyledEscena = styled.p`
    font-size: 18px;
    text-align: center;
    border-radius: 30px;
    border: 2px solid black;
    color: black;
    padding: 1em;
    margin: 20px;
`;
  
  const Escena: React.FC<EscenaProps> = ({texto}) => {
    return <StyledEscena>{texto}</StyledEscena>;
  };
  
  export default Escena;