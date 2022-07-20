import {FaCartPlus} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {useContext} from 'react'
import {contexto} from './CartContext'


const IconoCarrito = () => {
    const {cantidadDeItems} = useContext(contexto)
    return(
        <>
            <NavLink to='/Cart'><FaCartPlus style={{fontSize: '30px'}}/></NavLink>
            {cantidadDeItems > 0 && <h2>{cantidadDeItems}</h2>}
        </>
    )

}

export default IconoCarrito