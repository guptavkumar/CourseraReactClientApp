import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents';
import React, { Component } from 'react';
import { DISHES } from './shared/dishes';

class App extends Component {
constructor(props)
{
  super(props);
  this.state = { 
    dishes: DISHES
   }
}

  
  render() { 
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
              <div className="row">
                  <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
              </div>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}
 
export default App;
