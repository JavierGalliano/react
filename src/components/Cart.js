import { useContext } from "react"
import {contexto} from './CartContext'
import {NavLink} from 'react-router-dom'
const Cart = () =>{
    const {removeItem, clear, productosCarrito, precioTotal} = useContext(contexto)

    const eliminar = (element) =>{
        removeItem(element)
    }
    const vaciar = () =>{
        clear()
    }
    return(
        <div style={style.contenedor}>
            {productosCarrito.length <= 0 
            ? <div style={style.contenedor}><h3>No hay productos</h3><NavLink to="/"><button>Volver a Home</button></NavLink></div>
            : productosCarrito.map((element) =>
            <div key={element.id} style={style.contenedor}>
                <h3>{element.title}</h3>
                <p>{`Precio: ${element.price}`}</p>
                <p>{`Cantidad: ${element.cantidad}`}</p>
                <button onClick={()=>eliminar(element)}>Eliminar</button>
            </div>
            )}
            {productosCarrito.length > 0 && <h4>{`El precio total es ${precioTotal}`}</h4>}
            {productosCarrito.length > 0 && <button onClick={vaciar}>Vaciar carrito</button>}
        </div>
    )
}

export default Cart

const style = {
    contenedor: {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center"
    }
}