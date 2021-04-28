import React, { Component } from 'react';
import {Form,FormGroup,Label,Input, Button,Modal,ModalBody,ModalHeader, Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component {

    constructor(props)
    {
        super(props);
        this.state={isNavOpen:false, isModelOpen:false};
        this.ToggleNav = this.ToggleNav.bind(this);
        this.ToggleModel = this.ToggleModel.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    ToggleNav=()=>{
        this.setState({isNavOpen : !this.state.isNavOpen});
    }

    ToggleModel=()=>{
        this.setState({isModelOpen : !this.state.isModelOpen});
     }

    handleLogin(event) {
        
        
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
            this.toggleModal();
        event.preventDefault();

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
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Button outline onClick={this.ToggleModel}>
                        <span className="fa fa-sign-in fa-lg">Login</span>
                    </Button>
                </NavItem>
            </Nav>
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
          <Modal isOpen={this.state.isModelOpen} toggle={this.ToggleModel}>
              <ModalHeader toggle={this.ToggleModel}>Login</ModalHeader>
              <ModalBody>
              <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
              </ModalBody>
          </Modal>
          </>
        );
    }

    
}
 
export default Header;