import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Conversor() {
    const [texto, setTexto] = useState('')
    const [voz, setVoz] = useState('')

    function cambiarTexto(evento) {
        setTexto(evento.target.value)
    }

    function textoAvoz() {
        const configuracion = new SpeechSynthesisUtterance(texto)
        speechSynthesis.speak(configuracion)
    }

    function vozAtexto(params) {
        const agente = new webkitSpeechRecognition()
        agente.start()
        agente.onresult = resultado
    }
    function resultado(informacion) {
        console.log(informacion.results[0][0].transcript)
        setVoz(informacion.results[0][0].transcript)
        //informacion.results[0][0].transcript
    }

    return (
        <>
            <h1>Conversor TTS y STT</h1>
            <h2>Conversor de texto a voz</h2>
            <input type="text" value={texto} onChange={cambiarTexto} />
            <button onClick={textoAvoz}>Convertir</button>
            <h2>Conversor de voz a texto</h2>
            <button onClick={vozAtexto}>Grabar</button>
            {voz}
        </>
    )
}

export default Conversor


