 import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Project6Ecom/Components/Home'
import Cart from './Project6Ecom/Components/Cart'
import Navbar from './Project6Ecom/Components/Navbar'
import About from './Project6Ecom/Components/About'
import Data from './Project6Ecom/Components/Data'
import { useState } from 'react'

const App = () =>{
  const[data,setData]=useState(Data)
  const[search,setSearch]=useState("")
  const[cart,setCart]=useState([])

  function handleClick(item){
         setCart([...cart,item])
     }

  return(
    <div>
      <BrowserRouter>
        <Navbar setSearch={setSearch} data={data} setData={setData} size={cart.length}/>
          <Routes>
            <Route path='/' element={<Home data={data} search={search} handleClick={handleClick}/>}></Route>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
          <Route path='/about/:aboutId' element={<About Data={Data}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App





