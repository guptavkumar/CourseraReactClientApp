

import Menu from '../components/MenuComponents';
import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import DishDetailsComponent from '../components/DishDetailsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


class Main extends Component {
constructor(props)
{
  super(props);
  this.state = { 
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
   }
}

  render() { 

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

  const DishDetails =({match})=>
   {
     return(
       <DishDetailsComponent selectedDishFromMenu = {this.state.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId))[0]} 
        comments = {this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId))}/>
     );
   }

    return (
      <div >
        <Header />
        
        <Switch>
           <Route path = '/home' component={HomePage} />
           <Route path = '/aboutus' component={()=> <About leaders ={this.state.leaders}/>} />
          <Route exact path='/menu' component={()=> <Menu dishes={this.state.dishes} />}/>
          <Route path='/menu/:dishId' component={DishDetails}/>
          <Route exact path='/contactus' component={Contact} />
          <Redirect to='/home'/>
       </Switch>
       
        <Footer />        
        
      </div>
    );
  }
}
 
export default Main;
