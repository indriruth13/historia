import React from 'react';
import '../../scss/historia.scss';

export default class navBar extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a onClick={() => this.navigateTo("/")}
                        className = "brand-logo">
                        Historia
                    </a>
                    <ul className="right hide-on-med-and-down">
                        {menuItems.call(this)}
                    </ul>
                </div>
            </nav>
        );
    }
    componentWillUnmount() {
        this.subscription.dispose();
    }

    navigateTo = url => window.history.pushState(null, null, url)
}

function menuItems() {
    return (
        <div>
            <li>
                <a onClick={() => this.navigateTo("/")}>
                    Home
                </a>
            </li>
            <li>
                <a onClick={() => this.navigateTo("/vendor")}>
                    Vendor
                </a>
            </li>
            <li>
                <a onClick={() => this.navigateTo("/")}>
                    Event
                </a>
            </li>
            <li>
                <a onClick={() => this.navigateTo("/")}>
                    About Us
                </a>
            </li>
            <li>
                <a onClick={() => this.navigateTo("/login")}>
                    <i className="fa fa-user"></i>
                </a>
            </li>
        </div>
    )
}
