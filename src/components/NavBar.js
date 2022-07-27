import { useState, useEffect } from 'react'
import './NavBar.css'
import logo from '../imagenes/logoTienda.png'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const viewport = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    }

    const categories = [
        { name: "electronics", id: 0, route: "/category/electronics" },
        { name: "jewelery", id: 1, route: "/category/jewelery" },
        { name: "men's clothing", id: 2, route: "/category/men's clothing" },
        { name: "women's clothing", id: 3, route: "/category/women's clothing" },
    ];

    return (
        <header style={styles.container}>
            <div style={styles.branchContainer}>
                <Link to="/"><img style={styles.logo} src={logo} alt="" /></Link>
                <h1 style={styles.title}>Mi tienda online</h1>
            </div>
            <div style={styles.links}>
                <nav>
                    {categories.map((category) => <NavLink key={category.id} style={styles.link} to={category.route}>{category.name}</NavLink>)}
                </nav>
                <Link to="/cart"><CartWidget /></Link>
            </div>
        </header >
    )
}
const styles = {
    container: {
        display: 'flex none',
        
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    branchContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        fontSize: 25
    },
    links: {
        display: "flex"
    },
    link: {
        fontSize: 16,
        padding: 20
    },
    logo: {
        height: 80
    }
};

export default Navbar 










/* import {db} from '../firebase/firebase'
import { getDoc, collection, doc } from 'firebase/firestore' */

/* const NavBar = () =>{

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

export default NavBar */