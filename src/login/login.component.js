import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Register from "../register/register.component";

class LoginFormContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email:''
        };

        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log('Change detected. State updated' + name + ' = ' + value);
    }

    handleSubmit(event) {
        alert('A form was submitted: ' + this.state.name + ' // ' + this.state.email);
        event.preventDefault();
    }

    render() {
        return (
            <div className="text-content">
                <h1>Sign in</h1>
                <form onSubmit={this.handleSubmit} className="form-group">
                    <div className="form-group__input">
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}
                               className="form-control" id="nameInput" placeholder="Name"/>
                    </div>
                    <div className="form-group__input">
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange}
                               className="form-control" id="emailInput" placeholder="Email Address"/>
                    </div>
                    <input type="submit" value="Submit" className="submit-button"/>
                </form>
                <div className="text-content__bottom">
                    <span>Don't have an account?</span>
                    <Router>
                        <Link to="/register"> Sign up Now</Link>
                        <Route path="/register" component={Register}/>
                    </Router>
                </div>
            </div>
        )
    }
}

export default class Login extends React.Component {
    render() {
        return (
            <div className="login__container">
                <div className="login__container__content">
                    <div className="login__container__content-left">
                        <div className="texts">
                            <span>Hi,</span>
                            <h1>Welcome Back!</h1>
                        </div>
                    </div>
                    <div className="login__container__content-right">
                        <LoginFormContent />
                    </div>
                </div>
            </div>
        )
    }
}
