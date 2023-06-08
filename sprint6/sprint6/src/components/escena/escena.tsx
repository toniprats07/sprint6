import React from 'react';

interface EscenaProps {
    texto: string;
  }
  
  const Escena: React.FC<EscenaProps> = ({texto}) => {
    return <p>{texto}</p>;
  };
  
  export default Escena;