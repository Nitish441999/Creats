// import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Navbar from "./component/Navbar/Navbar"
import Search from "./component/Navbar/Search/Search"
import Footer from "./component/Footer/Footer"
import Home from './component/Home/Home'
import Men from './component/Men/Men'
import Women from './component/Women/Women'
import Accessories from './component/Accessories/Accessories'
import Form from './component/Form/Form'
import Login from './component/Form/Login/Login'
import Details from './component/Details/Details'
import Lofers from './component/Men/Loafers/Lofers'
// import Sneakers from './component/Men/Sneakers/Sneakers'
import Casual from './component/Men/Casual/Casual'
import Boots from './component/Men/Boots/Boots'
import Runners from './component/Men/Runners/Runners'
import Wshopby from './component/Women/Shop By/Wshopby'
import Wboots from './component/Women/BootsW/Wboots'
import Wcasual from './component/Women/CasualW/Wcasual'
import Wlofers from './component/Women/LofersW/Wlofers'
import Wrunners from './component/Women/RunnersW/Wrunners'
import Wsneakers from './component/Women/SneakersW/Wseakers'
import StyleByS from './component/StyleByS/StyleByS'
import Socks from './component/Accessories/Socks/Socks'
import Laces from './component/Accessories/Laces/Laces'
import Sale from './component/Accessories/Sale/Sale'
import Threads from './component/Accessories/Threads/Threads'

// import {Product} from './component/Product.json'
import Shopall from './component/Shopall/Shopall'
import Addcart from "./component/Addcart/Addcart"
import Items from "./component/Addcart/Items"




function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div className='App'>
    <BrowserRouter>
      <Navbar  />
      <div style={{marginTop:"6rem"}}>
      <Routes>
      <Route path='search' element={<Search />} />
      <Route path='/' element={<Home/>}></Route>
       <Route path='shopby' element={<Men/>}/>
      <Route path='women' element={<Women/>}/>
      <Route path='accessories' element={<Accessories/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/detail' element={<Details/>}/>
      <Route path='loafers' element={<Lofers/>}/>
       {/* <Route path='sneakers' element={<Sneakers/>}/> */}
      <Route path='casual' element={<Casual />}/>
      <Route path='boots' element={<Boots />}/>
      <Route path='runner' element={<Runners />}/> 
       

      <Route path='wshopby' element={<Wshopby/>}/>
      <Route path='Wboots' element={<Wboots/>}/>
      <Route path='wcasual' element={<Wcasual/>}/>
      <Route path='wlofer' element={<Wlofers/>}/>
      <Route path='wrunners' element={<Wrunners/>}/>
      <Route path='wsneakers' element={<Wsneakers/>}/>
      <Route path='styleByS' element={<StyleByS/>}/>

      <Route path='socks' element={<Socks/>}/>
      <Route path='laces' element={<Laces/>}/>
      <Route path='sale' element={<Sale/>}/>
      <Route path='threads' element={<Threads/>}/>
      <Route path='/products/:category' element={<Shopall/>}/>
      <Route path='product' element={<Details/>}/>
      <Route path='/addcart' element={<Addcart/>}/>
      <Route path="item" element={<Items/>}/>
      

      
      

      </Routes>
      </div>
      <Footer />

      </BrowserRouter>

    </div>
      
    
  )
}

export default App;
