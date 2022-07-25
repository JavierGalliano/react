import { useState, useEffect } from 'react'
import ItemList from './ItemlList'
import ClipLoader from "react-spinners/ClipLoader"
import { useParams } from 'react-router-dom'
import {db} from '../firebase/firebase'
import {getDocs, collection, query, where} from 'firebase/firestore'

const ItemListContainer = ({greeting}) =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    let {categoryId} = useParams()

    useEffect(()=>{
        loading != true && setLoading(true)
        const prueba = categoryId 
        ? query(collection(db, 'productos'), where('category', '==', categoryId)) 
        : collection(db, 'productos')
        getDocs(prueba)
        .then(result => {
            const lista = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setProductos(lista)
        })
        .catch(err=>console.log(err))
        .finally(() =>{
            setLoading(false)
        })
    },[categoryId])

    return(
        <>
            <h2 style={{textAlign:'center'}}>{greeting}</h2>
            {loading ? <ClipLoader size={200} /> : <ItemList items={productos}/>}
        </>
    )
}
export default ItemListContainer