import React, { Component } from 'react';
import {Button,Row, Col, Form, FormGroup,Label,Input, Modal, ModalBody, ModalHeader} from 'reactstrap';

import { Control,LocalForm , Errors} from 'react-redux-form';

/*
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
 
export default CommentForm;
*/