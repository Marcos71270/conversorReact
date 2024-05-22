import { useEffect, useState } from 'react'
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

  async function ingresar() {
    const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario + '&clave=' + clave, { credentials: 'include' })
    if (peticion.ok) {
      setLogueado(true)
    } else {
      alert('Usuario o clave incorrectos')
    }
    // if (usuario === 'admin' && clave === 'admin') {
    // alert("Datos correctos")
    // setLogueado(true)
    //} else {
    //  alert("Datos incorrectos")
    // }
  }
  async function validar() {
    const peticion = await fetch('http://localhost:3000/validar', { credential: 'include' })
    if (peticion.ok) {
      setLogueado(true)
    } else {
      alert('Usuario o clave incorrectos')
    }
  }

  useEffect(() => {
    validar()
  }, [])

  if (logueado) {
    return (<Conversor />)
  }

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
