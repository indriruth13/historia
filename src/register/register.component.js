import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from "../login/login.component";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            email:''
        };

        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const firstName = target.firstName
        const lastName = target.lastName

        this.setState({
            [firstName]: value,
            [lastName]: value
        });
        console.log('Change detected. State updated' + firstName + ' and ' + lastName + ' = ' + value);
    }

    handleSubmit(event) {
        alert('A form was submitted: ' + this.state.firstName + ' and ' + this.state.lastName + ' // ' + this.state.email);
        event.preventDefault();
    }

    render() {
        return (
            <div className="register__container">
                <div className="register__container__content">
                    <div className="register__container__content-left">
                        <div className="text-content">
                            <h1>Register</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" name="name" value={this.state.firstName} onChange={this.handleChange}
                                           className="form-control" id="nameInput" placeholder="First Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="name" value={this.state.lastName} onChange={this.handleChange}
                                           className="form-control" id="nameInput" placeholder="Last Name"/>
                                </div>
                                <div className="form-group">
                                    <input name="email" type="email" value={this.state.email} onChange={this.handleChange}
                                           className="form-control" id="emailInput" placeholder="Email Address"/>
                                </div>
                                <input type="submit" value="Submit" className="submit-button"/>
                            </form>
                            <div className="text-content__bottom">
                                <span>Already Have An Account?</span>
                                <Router>
                                    <Link to="/login"> Sign In</Link>
                                    <Route path="/login" component={Login}/>
                                </Router>
                            </div>
                        </div>
                    </div>
                    <div className="register__container__content-right">
                        <div className="texts">
                            <span>Create your own</span>
                            <h1>precious moment with us!</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
