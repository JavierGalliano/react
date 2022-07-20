import { useState, useEffect } from 'react'
import ItemList from './ItemlList'
import ClipLoader from "react-spinners/ClipLoader"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    let {categoryId} = useParams()
    useEffect(()=>{
        setTimeout(()=>{
        const link = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : 'https://fakestoreapi.com/products'
        fetch(link)
        .then(res=>res.json())
        .then(json=>{
            setProductos(json)
        })
        .catch(err=>console.log(err))
        .finally(() =>{
            setLoading(false)
        })
        }, 500)
    },[categoryId])

    return(
        <>
            <h2 style={{textAlign:'center'}}>{greeting}</h2>
            {loading ? <ClipLoader size={200} /> : <ItemList items={productos}/>}
        </>
    )
}
export default ItemListContainer