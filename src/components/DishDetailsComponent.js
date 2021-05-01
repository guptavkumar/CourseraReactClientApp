import { Button,Row, Col, Card, Label,CardImg, Input, Modal, ModalBody, ModalHeader,CardText, CardImgOverlay, CardTitle,CardBody,Breadcrumb,BreadcrumbItem }  from 'reactstrap';
import { Control,LocalForm , Errors} from 'react-redux-form';

import {Link} from 'react-router-dom';
import React, { Component } from 'react';
//import CommentForm from './CommentForm';


const maxLength = (len) => (val) => !(val) || (val.length <=len);
const minLength = (len) => (val) => val && (val.length>=len);
const minLengthMessage = ' Must be greater than 2 characters';
const maxLengthMessage = ' Must be 15 characters or less';

class CommentForm extends Component {
    state = { 
        isModelOpen : false
     }

     ToggleModel =  ()=>
     {
        this.setState({isModelOpen: !this.state.isModelOpen});
        console.log("Submit Button Clicked");
     }

    render() { 
        return (  
            <>
            <div>
                <Button outline color="secondary" onClick={this.ToggleModel}>
                <span className="fa  fa-pencil fa-lg">Submit Comment</span> </Button>
                
            </div>

            <Modal isOpen={this.state.isModelOpen} toggle={this.ToggleModel}>
            <ModalHeader toggle={this.ToggleModel}>Login</ModalHeader>
            <ModalBody>
            <LocalForm onSubmit={(value)=>this.hanleSubmit(value)}>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="rating"> Rating</Label>
                                <Control.select model=".rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author"
                                placeholder="Your Name" className="form-control"
                                validators={{minLength:minLength(3), maxLength:maxLength(15)}}
                                
                                />
                                   <Errors className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        minLength:minLengthMessage,
                                        maxLength:maxLengthMessage
                                    }}/>
                                
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" id="comment" rows="6" className="form-control" />
                            </Col>
                           
                        </Row>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </LocalForm>
            </ModalBody>
            </Modal>
</>
        );
    }
}
   
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
                    <CommentForm />
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