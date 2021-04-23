import React from 'react';
import {  Card, CardImg, CardText, CardImgOverlay, CardTitle,CardBody, Breadcrumb, BreadcrumbItem}  from 'reactstrap';
import { DISHES } from '../shared/dishes';
import {Link} from 'react-router-dom';




  function RenderMenuItems ({dish, onClick})
  {
      return(
        <Card >
          <Link to = {`/menu/${dish.id}`}>
           <CardImg width="100%" object src= {dish.image} alt={dish.alt} />
           <CardImgOverlay>
               <CardTitle tag="h5">{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
    </Card>
      );
    
  }
    const Menu = (props)=> { 
    
        const menu = props.dishes.map((dish)=>
       {
           return(
             <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItems dish={dish} onClick={props.onClick}/>
             </div>
           );
       });

       return(
           <div className="container">
               <div className="row">
                 <Breadcrumb>
                 <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                 <BreadcrumbItem active>Menu</BreadcrumbItem>
                 </Breadcrumb>
                 </div>
                 <div className="row">
                      {menu}
                    
                 </div>
                 
                
           </div>
       );
    }

 
export default Menu;