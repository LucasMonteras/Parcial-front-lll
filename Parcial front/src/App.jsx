
import './App.css'
import Card from './Componentes/Card'

function App() {
  



  
  return (
    <div className='App' style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1>Carga de Estudiantes</h1>
      <Card/>
      <form style={{
          display:'flex',
          flexDirection:'column',
          width :'200px',
          alignItems:'center'}}>
      </form>
    </div>
  )
}

export default App
