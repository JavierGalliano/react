import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) =>{
    const [contador, setContador] = useState(initial)

    const mas = () =>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    const menos = () =>{
        if(contador > 1){
            setContador(contador - 1)
        }
    }
    const mandarAlPadre = () =>{
        onAdd(contador)
    }

    return(
        <>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div style={{display:'flex'}}>
                    <button onClick={mas}>+</button>
                    <p>{contador}</p>
                    <button onClick={menos}>-</button>
                </div>
                <button onClick={mandarAlPadre}>Comprar</button>
            </div>
        </>
    )
}

export default ItemCount