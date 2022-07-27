import { useState } from "react"
const Formulario = ({finalizarCompra}) =>{
    const [datos, setDatos] = useState({name: '', apellido: '', teléfono: '', email: ''})

    const eventoDato = (e) =>{
        setDatos({...datos, [e.target.name] : e.target.value})
    }

    const eventoFormulario = (event) =>{
        event.preventDefault()
        console.log(datos)
        finalizarCompra(datos)
    }

    return(
        <form onSubmit={eventoFormulario}>
            <label htmlFor="name">Nombre</label>
            <br></br>
            <input type="text" id="name" name="name" onChange={eventoDato} required></input>
            <br></br>
            <label htmlFor="apellido">Apellido</label>
            <br></br>
            <input type="text" id="apellido" name="apellido" onChange={eventoDato} required></input>
            <br></br>
            <label htmlFor="teléfono">Telefono</label>
            <br></br>
            <input type="text" id="teléfono" name="teléfono" onChange={eventoDato} required></input>
            <br></br>
            <label htmlFor="email">Correo Electronico</label>
            <br></br>
            <input type="email" id="email" name="email" onChange={eventoDato} required></input>
            <br></br>
            <button type="submit">Enviar</button>
        </form>
    )

}
export default Formulario