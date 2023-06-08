import Escena from './components/escena/escena';
import historia from './components/historia.json';
import './App.css'

function App() {

  return (
    <div>
    {historia.map((linea: string, index: number) => (
      <Escena key={index} texto={linea} />
    ))}
  </div>
  )
}

export default App
