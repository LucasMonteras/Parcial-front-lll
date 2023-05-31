
import { useState } from 'react'
import './App.css'
import Card from './Componentes/Card'

function App() {
  
  const [estudiante,setEstudiante] = useState({
    nombre:"",
    apellido:"",
    materia:""
  })

  const [show, setShow] = useState(false)
  const [error,setError] = useState(false)

  // condiciones

const handleSubmit =(e)=>{
  e.preventDefault()
  if(estudiante.nombre.length > 3 && estudiante.apellido.length>3 && estudiante.materia.length>6){
    setShow(true)
    setError(false)
  }else{
    setError(true)
  }


}

  return (
    <div className='App' style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1>Cargar Estudiante </h1>
      
      <form onSubmit={handleSubmit} style={{
          display:'flex',
          flexDirection:'column',
          width :'200px',
          alignItems:'center',
          }}>
            <label></label>
            <input type='text' onChange={(e) => setEstudiante((prevState) => ({...prevState, nombre: e.target.value}))} placeholder='Nombre del estudiante' style={{marginBottom: '10px'}}/>
            <label></label>
            <input type='text' onChange={(e) => setEstudiante((prevState) => ({...prevState, apellido: e.target.value}))} placeholder='Apellido del estudiante'style={{marginBottom: '10px'}}/>
            <label></label>
            <input type='text' onChange={(e) => setEstudiante((prevState) => ({...prevState, materia: e.target.value}))} placeholder='Materia a rendir 'style={{marginBottom: '20px'}}/>
            <button style={{marginBottom: '40px'}} >Enviar</button >
            {error&& 'Por favor chequea que la información sea correcta'}
      </form>
      {show && <Card estudiante={estudiante}/>}
    </div>
  )
}

export default App
