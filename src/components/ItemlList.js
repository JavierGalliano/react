import Item from './Item'
const ItemList = ({items}) =>{
    return(
    <div style={{display:"flex", flexWrap: "wrap" ,alignItems:"center", justifyContent: "space-evenly"}}>
        {items.map((productos) => <Item key={productos.id} id={productos.id} titulo={productos.title} precio={productos.price} descripcion={productos.description} img={productos.image}/>)}
    </div>
    )
}

export default ItemList