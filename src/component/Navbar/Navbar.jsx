import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import'./Navbar.css';
import {Link, NavLink} from 'react-router-dom';
// import {product} from '../../component/Product.json'


function NavScrollExample() {
  // const FiltterByCategory = (category)=>{
  //   const element = product.filter((products)=>products.category === category) 
  //   setCount(element)

  // }
  
  return (
    <>
    <Navbar expand="lg"  id='navbar-1' className='w-100% nav-colored nav-transparent'>
      <Container fluid>
        <Navbar.Brand to="#">GREATS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            id='navmany'
           
            navbarScroll
          >
            <Nav.Link><NavLink to="/">HOME</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/products/all">SHOP All</NavLink></Nav.Link>
            <NavDropdown title="MEN" id="navbarScrollingDropdown"> 
              <NavDropdown.Item  > <NavLink to="/products/Msneakers">Sneakers</NavLink> </NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/products/Mloafers">Loafers</NavLink></NavDropdown.Item>
              <NavDropdown.Item > <NavLink to="/products/Mrunners">Runners</NavLink></NavDropdown.Item>
              <NavDropdown.Item > <NavLink to="/products/MFormal">Casual</NavLink></NavDropdown.Item>
              <NavDropdown.Item > <NavLink to="/products/Mboots">Boots</NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/products/Msneakers">Shop All</NavLink></NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="WOMEN" id="navbarScrollingDropdown">             
              <NavDropdown.Item><NavLink to="/products/Wsneakers">Sneakers</NavLink>  </NavDropdown.Item>
              <NavDropdown.Item> <NavLink to="/products/Wheels">Heels</NavLink> </NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/products/Wrunners">Runners</NavLink> </NavDropdown.Item>
              <NavDropdown.Item> <NavLink to="/products/Wedges">Wedged</NavLink></NavDropdown.Item>
              <NavDropdown.Item> <NavLink to="/products/Wboots">Boots</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/products/Mboots">Shop All</NavLink></NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="ACCESSORIES" id="navbarScrollingDropdown">
              <NavDropdown.Item herf="laces">Laces </NavDropdown.Item>
              <NavDropdown.Item herf="socks">Socks </NavDropdown.Item>
              <NavDropdown.Item herf="threads">Threads </NavDropdown.Item>
              <NavDropdown.Item herf="sale">Sale </NavDropdown.Item>
              
             
              
            </NavDropdown>
            
          </Nav>
           <div className='navion'>
           
           <NavLink to="/search"><i class="bi bi-search"></i></NavLink>
           <NavLink to="/form"><i class="bi bi-person-fill"></i></NavLink>
           <NavLink to="/addcart"><i class="bi bi-bag-fill"></i></NavLink>
           </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
<hr/>

export default NavScrollExample;