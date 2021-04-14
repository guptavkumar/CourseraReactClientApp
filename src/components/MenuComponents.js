import React, { Component } from 'react';
import {  Card, CardImg, CardText, CardImgOverlay, CardTitle,CardBody }  from 'reactstrap';
import { DISHES } from '../shared/dishes';

class Menu extends Component {

    constructor(props)
    {
        super(props);
    
   this.state = { 
       selectedish:  null
     }
    }

    onDishSelection(dish)
    {
        
        this.setState({ selectedish : dish }, () => {
            console.log(this.state.selectedish, 'selecte Dish');
          });
       
    }

    renderDish(dish) {
        
        if (dish != null)
        {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
        {
            console.log("selected item is still null");
            return(
                <div></div>
            );
        }
    }


    render() { 
       const menu = this.props.dishes.map((dish)=>
       {
           return(
             <div key={dish.id} className="col-12 col-md-5 m-1">
                 <Card onClick={()=>this.onDishSelection(dish)}>
                   
                        <CardImg width="100%" object src= {dish.image} alt={dish.alt} />
                        <CardImgOverlay>
                            <CardTitle tag="h5">{dish.name}</CardTitle>
                        </CardImgOverlay>
                  </Card>
             </div>
           );
       });

       return(
           <div className="container">
                 <div className="row">
                      {menu}
                    
                 </div>
                 <div className="row">
                    {this.renderDish(this.state.selectedish)}
                 </div>
           </div>
       );
    }
}
 
export default Menu;