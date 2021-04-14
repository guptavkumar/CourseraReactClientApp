import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
            <div className="row">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
        </div>
      </Navbar>
    </div>
  );
}


export default App;
