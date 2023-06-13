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
  const [mostrarBienvenida, setMostrarBienvenida] = useState<boolean>(true);
  const [indiceActual, setIndiceActual] = useState<number>(0);

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

  const empezarHistoria = () => {
    setMostrarBienvenida(false);
  };

  return (
    <div>
        {mostrarBienvenida ? (
          <div>
            <h1>Benvingut al projecte de la historia</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa provident eaque ipsum laudantium culpa laboriosam vero ab. Iure fugiat nemo magni similique iste quaerat facilis commodi fuga velit eligendi.</p>
            <button onClick={empezarHistoria}>Començar</button>
          </div>
        ) : (
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
      )}
    </div>
  );
};

export default App;

