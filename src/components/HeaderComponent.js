import React, { Component } from 'react';
import {Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component {

    constructor(props)
    {
        super(props);
        this.state={isNavOpen:false};
        this.ToggleNav = this.ToggleNav.bind(this);
    }

    ToggleNav=()=>{
        this.setState({isNavOpen : !this.state.isNavOpen});
    }
    render()
    {
        return (  
            <>
            <Navbar dark expand="md">
              
             
                 <NavbarBrand className="mr-auto" href="/">
                     <img src="assets/images/logo.png" alt="Ristorante Con Fusion" height="30" width="41"></img>
                 </NavbarBrand>
             
               <NavbarToggler onClick={this.ToggleNav}/>
            <Collapse  isOpen={this.state.isNavOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink to="/home" className="nav-link">
                        <span className="fa fa-home fa-lg"> </span>Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/aboutus" className="nav-link">
                        <span className="fa fa-info fa-lg"> </span>About us
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/menu" className="nav-link">
                        <span className="fa fa-list fa-lg"> </span>Menu
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contactus" className="nav-link">
                        <span className="fa fa-card fa-lg"> </span>Contact us
                    </NavLink>
                </NavItem>
                
            </Nav>
            </Collapse>
            </Navbar>
            <Jumbotron>
            <div className="container">
                   <div className="row row-header">
                       <div className="col-12 col-sm-6">
                           <h1>Ristorante con Fusion</h1>
                           <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                       </div>
                   </div>
               </div>
          </Jumbotron>
          </>
        );
    }

    
}
 
export default Header;