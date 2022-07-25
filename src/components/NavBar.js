import { useState, useEffect } from 'react'
import './NavBar.css'
import logo from '../imagenes/logoTienda.png'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import {db} from '../firebase/firebase'
import { getDoc, collection, doc } from 'firebase/firestore'

const NavBar = () =>{

    const [categorias, setCategorias] = useState([])
    useEffect(()=>{
        const coleccionCatalogo = collection(db, "categorias")
        const documento = doc(coleccionCatalogo, "categoriasNavBar")
        getDoc(documento)
        .then(res =>{
            let resArray = res.data().array
            setCategorias(resArray)
        })
        .catch(err => console.log(err))
    },[])

    return(
    <header>
        <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
        <NavLink to="/"><h1>Tienda<br/>Online</h1></NavLink>
        
        <nav>
            {categorias.map((categorias)=><NavLink key={categorias} to={`/category/${categorias}`}>{categorias}</NavLink>)}
        </nav>
        <CartWidget/>
    </header>
    )
}

export default NavBar