import React from 'react';
import {  Card, CardImg, CardText, CardImgOverlay, CardTitle,CardBody, Breadcrumb, BreadcrumbItem}  from 'reactstrap';
import { DISHES } from '../shared/dishes';
import {Link} from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl';
import { Loading } from './LoadingComponent';


  function RenderMenuItems (props)
  {
    if (props.isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
  }
  else if (props.errMsg) {
      return(
          <div className="container">
              <div className="row"> 
                  <div className="col-12">
                      <h4>{props.errMsg}</h4>
                  </div>
              </div>
          </div>
      );
  }else
      return(
        <Card >
          <Link to = {`/menu/${props.dish.id}`}>
           <CardImg width="100%" object src= {baseUrl+ props.dish.image} alt={props.dish.alt} />
           <CardImgOverlay>
               <CardTitle tag="h5">{props.dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
    </Card>
      );
    
  }
    const Menu = (props)=> { 
    
        const menu = props.dishes.dishes.map((dish)=>
       {
         console.log("Is Loading Menu : " + props.dishes.isLoading);
        if (props.dishes.isLoading) {
          return(
              <div className="container">
                  <div className="row">            
                      <Loading />
                  </div>
              </div>
          );
      }
      else if (props.dishes.errMsg) {
          return(
              <div className="container">
                  <div className="row"> 
                      <div className="col-12">
                          <h4>{props.dishes.errMsg}</h4>
                      </div>
                  </div>
              </div>
          );
      }else
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