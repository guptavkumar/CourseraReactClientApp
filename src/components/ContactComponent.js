import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Row,Col, FormFeedback } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Form,Control,Errors} from 'react-redux-form';


const required = (val)=> val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <=len);
const minLength = (len) => (val) => val && (val.length>=len);
const isNumber = (val)=> !isNaN(Number(val));
const minLengthMessage = ' : Must be greater than 2 characters';
const maxLengthMessage = ' : Must be 15 characters or less';
const validEmail = (val)=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component
{
    constructor(props)
    {
        super(props);
       
       // this.handelSubmitbuttonEvent = this.handelSubmitbuttonEvent.bind(this);
       
    }


   handleSubmit(values) {
      

        this.props.resetFeedbackForm();
       
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postFeedback(values);
    }

    render()
    {
    
        return(
            <div className="container">
                 <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>

                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text className="form-control" model=".firstname" id="firstname" name="firstname" placeholder="Enter First name here"
                                    validators={{required,minLength:minLength(3), maxLength:maxLength(15)}}  />

                                    <Errors className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength:minLengthMessage,
                                        maxLength:maxLengthMessage
                                    }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}> Last Name</Label>
                                <Col md={10}>
                                <Control.text className="form-control" model=".lastname" name="lastname" placeholder="Enter last name here" 
                                 validators={{required, maxLength:maxLength(15),minLength:minLength(3)}} /> 
                                 <Errors className="text-danger"
                                 model=".lastname"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     minLength:minLengthMessage,
                                     maxLength:maxLengthMessage
                                 }}
                                 />
                                 
                                </Col>
                            </Row>

                            <Row className="from-group">
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text className="form-control" model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        validators={{required,minLength:minLength(3), maxLength:maxLength(15),isNumber}}
                                        />
                                 <Errors className="text-danger"
                                 model=".telnum"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     minLength:minLengthMessage,
                                     maxLength:maxLengthMessage,
                                     isNumber:'Must be a Number'
                                 }}
                                 />     
                                </Col>
                            </Row>

                            <Row className="form-group">
                            <Label htmlFor="email" md={2} >Email</Label>
                                <Col md={10}>
                                <Control.text className="form-control" model=".email" name="email" placeholder="Email"  
                                  validators={{required, validEmail}}
                                    />
                                     <Errors className="text-danger"
                                 model=".email"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     validEmail:'Invalid Email Address'
                                 }}
                                 /> 
                                </Col>
                                
                            </Row>

                            <Row className="form.group">
                            <Col md={{size:6,offset:2}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox className="form-control" model=".agree" name="agree"  
                                            /> {' '}
                                        <strong>May we contact you ?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{size:3, offset:1}}>
                                <Control.select  className="form-control" model=".contactType" name="contacttype">
                                
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Control.select>
                            </Col>
                                
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea  className="form-control" model=".message" id="message" name="message"
                                        rows="12"
                                        
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
    
}


/*function Contact(props)
{
return(
    <div className="container">
        <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>

        <div className="row row-content">
            <div className="col-12">
            <h3>Location Information</h3>
            </div>
            <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                    121, Clear Water Bay Road<br />
                    Clear Water Bay, Kowloon<br />
                    HONG KONG<br />
                    <i className="fa fa-phone"></i>: +852 1234 5678<br />
                    <i className="fa fa-fax"></i>: +852 8765 4321<br />
                    <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
                <h5>Map of our Location</h5>
            </div>
            <div className="col-12 col-sm-11 offset-sm-1">
                <div className="btn-group" role="group">
                    <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                    <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                    <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                </div>
            </div>
        </div>
    </div>
);
}
*/
export default Contact;