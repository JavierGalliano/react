import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from './components/Cart'
import CartContext from './components/CartContext'


function App() {
  return (
    <BrowserRouter>
    <CartContext>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Lista de Productos"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenido"/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </CartContext>
    </BrowserRouter>
  );
}

export default App;
