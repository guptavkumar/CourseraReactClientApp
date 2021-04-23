import React  from 'react';
import {  Card, CardImg, CardText, CardImgOverlay, CardTitle,CardBody,Breadcrumb,BreadcrumbItem }  from 'reactstrap';
import {Link} from 'react-router-dom';


   
    function RenderComments({comments})
    {
       
       if(comments !=null)
        {
           const commentlist= comments.map((comment)=>
            {
                return(
                
                    
                    <ul key={comment.id} class = "list-unstyled">
                   
                         <li>{comment.comment}</li>
                         <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { 
                month: 'short', 
                day: '2-digit',
                year: 'numeric', 
            }).format(new Date(comment.date))}</li>
                         
                         
                     </ul>
                
            );

                
            }
            );
            
        return(
            <div   className="col-12 col-md-5 m-1">  
                    <h4>Comments</h4>
                    {commentlist}
            </div>
        );
        }
        else{
            return(<div></div>);
        }
        
     
       
    }

    function RenderDish({dish}) {
        
    
        if (dish != null)
        {
          
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else
        {
           
            return(
                <div></div>
            );
        }
    }

  const DishDetailsComponent = (props) =>{ 

        if(props.selectedDishFromMenu !=null)
        {
            return (
            
                <div className="container">

                    <div className="row">
                    <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.selectedDishFromMenu.name}</BreadcrumbItem>
                </Breadcrumb>
                
                <div className="col-12">
                        <h3>{props.selectedDishFromMenu.name}</h3>
                        <hr />
                </div>              


                </div>

                    <div className="row">
                    <RenderDish dish={props.selectedDishFromMenu} />
                    <RenderComments comments={props.comments} />
                    
                </div>
   
                   
                   
                   
               </div>  );
        }
        else
        {
            return(<div></div>);
        }
        
    }

 
export default DishDetailsComponent;