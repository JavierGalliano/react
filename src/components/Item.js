import { NavLink } from "react-router-dom"
const Item = ({titulo, precio, img, id}) =>{

   return(
    <>
        <div style={style.contenedor} >
        <h2>{titulo}</h2>
        <p> {`Precio: $${precio}`}</p>
        <img style={style.img}src={img} alt=""></img>
        <NavLink to={`/item/${id}`}><button>Ver mas</button></NavLink>
        </div>
    </>
    )
}
const style = {
    contenedor: {
        border: "2px solid black",
        width: 250,
        height: 370,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#acdeff",
        borderRadius: "5%"

    },
    img:{
        width: 100,
        height: 100 
    }
}
export default Item