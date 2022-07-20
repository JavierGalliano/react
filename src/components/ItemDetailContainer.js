import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import ClipLoader from "react-spinners/ClipLoader"
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    
    useEffect(() =>{
        setTimeout(()=>{
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProducto(json))
            .catch(err=>console.log(err))
            .finally(()=>{
                setLoading(false)})
        }, 500)
    },[id])

    return(
        <>
            {loading ? <ClipLoader size={200}/> : <ItemDetail item={producto}/>}
        </>
    )
}

export default ItemDetailContainer