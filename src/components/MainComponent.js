

import Menu from '../components/MenuComponents';
import React, { Component } from 'react';
import {actions} from 'react-redux-form';
import DishDetailsComponent from '../components/DishDetailsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect, BrowserRouter, withRouter} from 'react-router-dom';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import {postComment, fetchDishes, fetchComments, fetchPromos,fetchLeaders,postFeedback} from '../redux/ActionCreators';
import {TransitionGroup, CSSTransition} from 'react-transition-group';



const mapStateToProps = state =>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders

  }
}

const mapDispatchToProps = dispatch => ({
  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes : ()=>{dispatch(fetchDishes())},
  fetchComments : ()=>{dispatch(fetchComments())},
  fetchPromos : ()=>{dispatch(fetchPromos())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchLeaders : ()=>{dispatch(fetchLeaders())},
  postFeedback:(feedback) => dispatch(postFeedback(feedback))
  }
);

class Main extends Component {
constructor(props)
{
  super(props);
  
}

componentDidMount(){
this.props.fetchDishes();
this.props.fetchLeaders();
this.props.fetchComments();
this.props.fetchPromos();

}


  render() { 


    const HomePage = () => {
 
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMsg ={this.props.dishes.ErrMsg}
              promotion={this.props.promotions.promos.filter((promo) => promo.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promoErrMsg ={this.props.promotions.ErrMsg}
              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leadersErrmsg = {this.props.leaders.errMsg}
              leadersLoading ={this.props.leaders.isLoading}
          />
      );
    }

  const DishDetails =({match})=>
   {
     return(
       <DishDetailsComponent selectedDishFromMenu = {this.props.dishes.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId))[0]} 
       isLoading={this.props.dishes.isLoading}
       errMsg={this.props.dishes.ErrMsg}
        comments = {this.props.comments.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId))}
        commentsLoading={this.props.comments.isLoading}
        errMsgComments={this.props.comments.ErrMsg}
        postComment={this.props.postComment} 
        />
     );
   }

    return (
      <div >
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch>
           <Route path = '/home' component={HomePage} />
           <Route path = '/aboutus' component={()=> <About leaders ={this.props.leaders}/>} />
          <Route exact path='/menu' component={()=> <Menu dishes={this.props.dishes} />}/>
          <Route path='/menu/:dishId' component={DishDetails}/>
          <Route exact path='/contactus' component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
          <Redirect to='/home'/>
       </Switch>
       </CSSTransition>
       </TransitionGroup>
        <Footer />        
        
      </div>
    );
  }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Main));
