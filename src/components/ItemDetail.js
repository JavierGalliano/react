import ItemCount from './ItemCount'
import { NavLink } from 'react-router-dom'
import {useState} from 'react'
import {useContext} from 'react'
import {contexto} from './CartContext'

const ItemDetail = ({item}) =>{
    const {addItem} = useContext(contexto)

    const [comprar, setComprar] = useState (true)

    const onAdd = (unidades) =>{
    
        addItem({...item, cantidad: unidades})
        setComprar(false)       
    }

    return(
        <div style={style.contenedor}>
            <h2>{item.title}</h2>
            <p>{`Id: ${item.id}`}</p>
            <p>{`Precio: $${item.price}`}</p>
            <p>{`Categoría: ${item.category}`}</p>
            <p>{item.description}</p>
            <img style={style.img}src={item.image} alt=""></img>
            {comprar ? <ItemCount stock={5} initial={1} onAdd={onAdd}/> : <NavLink to="/cart"><button>Terminar compra</button></NavLink>}
        </div>
    )
}
export default ItemDetail

const style = {
    contenedor: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    img:{
        width: 200,
        height: 200 
    }
}