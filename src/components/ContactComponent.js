import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Row,Col, FormFeedback } from 'reactstrap';
import {Link} from 'react-router-dom';
import {LocalForm,Control,Errors} from 'react-redux-form';


class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contactType:'Tel',
            message:'',
            touched:{
                firstname:false,
                lastname:false,
                telnum:false,
                email:false
            }
        };

        this.handelInputChangeEvent = this.handelInputChangeEvent.bind(this);
        this.handelSubmitbuttonEvent = this.handelSubmitbuttonEvent.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {[field]: true }
        });
        console.log("comes inside Blur");
    }

    handelInputChangeEvent(event)
    {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked :target.value;
        const name = target.name;

        this.setState({[name]:value});
    }

    handelSubmitbuttonEvent(event)
    {
        console.log('The current state is: ' + JSON.stringify(this.state));
        alert('Current state is: '+ JSON.stringify(this.state));
        event.preventDefault();
    }

    validate(firstname, lastname,telnum,email)
    {
        const errors = {
            firstname:'',
            lastname:'',
            telnum:'',
            email:''
        };

        if(this.state.touched.firstname && firstname.length <3)
        {
            errors.firstname ="First nane should be greater than 3 characters"
            console.log("first name has error");
        }
        
        if(this.state.touched.lastname && lastname.length <3)
        {
            errors.lastname ="Last nane should be greater than 3 characters"
            
        }
        if(this.state.touched.email && email.split('').filter(x=>x =='@').length !=1)
        {
            errors.email ="Please enter a valid email attress. It should have @"
            
        }
        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';
        return errors;

    }
    render()
    {
        const errors = this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
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
                        <LocalForm onSubmit={this.handelSubmitbuttonEvent}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text className="form-control" model=".firstname" name="firstname" placeholder="Enter First name here" value={this.state.firstname} />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}> Last Name</Label>
                                <Col md={10}>
                                <Control.text className="form-control" model=".lastname" name="lastname" placeholder="Enter last name here" value={this.state.lastname} />
                                </Col>
                            </Row>

                            <Row className="from-group">
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text className="form-control" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        value={this.state.telnum}
                                        />
                                     
                                </Col>
                            </Row>

                            <Row className="form-group">
                            <Label htmlFor="email" md={2} >Email</Label>
                                <Col md={10}>
                                <Control.text className="form-control" model=".email" name="email" placeholder="Email" value={this.state.email} 
                                    />
                                </Col>
                                
                            </Row>

                            <Row className="form.group">
                            <Col md={{size:6,offset:2}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox className="form-control" model=".agree" name="agree" checked={this.state.agree} 
                                            /> {' '}
                                        <strong>May we contact you ?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{size:3, offset:1}}>
                                <Control.select  className="form-control" model=".contactType" name="contacttype" value={this.state.contactType}>
                                
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
                                        value={this.state.message}
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
                        </LocalForm>
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