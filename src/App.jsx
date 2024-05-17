import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './Conversor'



function App() {
  //hook,
  const [usuario, setUsuario] = useState('') // Estado para guardar el usuario
  const [clave, setClave] = useState('') // Estado para guardar la clave 
  const [logueado, setLogueado] = useState(false) // Estado para saber si el usuario esta logueado  

  // Funcion para cambiar el valor del usuario
  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }
  // Funcion para cambiar el valor de la clave 
  function cambiarClave(evento) {
    setClave(evento.target.value)
  }
  // Funcion para ingresar al dar click en el botón
  function ingresar() {
    console.log('usuario:', usuario)
    console.log('clave:', clave)
    if (usuario === 'admin' && clave === 'admin') {
      alert("Datos correctos")
      setLogueado(true)
    } else {
      alert("Datos incorrectos")
    }
  }

  if (logueado) {
    return (<Conversor/>)
  }g 

  return (
    <>
      <h1>Inicio de sesión</h1>
      <label htmlFor="usuario">Usuario:
        <input id='usuario' type="text" value={usuario} onChange={cambiarUsuario} />
      </label>
      <label htmlFor="clave">Clave:
        <input id='clave' type="password" value={clave} onChange={cambiarClave} />
      </label>
      <button type="submit" onClick={ingresar}>Ingresar</button>
    </>
  )
}

export default App
