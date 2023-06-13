import React, { useState } from 'react';
import Escena from './components/escena/escena';
import historia from './components/historia.json';
import styled from 'styled-components';
import './App.css';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: #f5f5f5;
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  color: black;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;


const App: React.FC = () => {
  const [indiceActual, setIndiceActual] = useState(0);

  const avanzarIndice = () => {
    if (indiceActual < historia.length - 1) {
      setIndiceActual(indiceActual + 1);
    }
  };

  const retrocederIndice = () => {
    if (indiceActual > 0) {
      setIndiceActual(indiceActual - 1);
    }
  };

  return (
    <div>
      <ButtonContainer>
        <StyledButton onClick={retrocederIndice} disabled={indiceActual === 0}>
          Anterior
        </StyledButton>
        <StyledButton onClick={avanzarIndice} disabled={indiceActual === historia.length - 1}>
          Següent
        </StyledButton>
      </ButtonContainer>
      {historia.map((linea: string, index: number) => (
        <Escena key={index} texto={linea} resaltado={index === indiceActual} />
      ))}
    </div>
  );
};

export default App;

