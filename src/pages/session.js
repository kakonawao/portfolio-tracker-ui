import React from "react";
import { connect } from "react-redux";

import LoginForm from "../components/loginForm";
import { login } from "../actions/session";


const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        username: state.username
    }
};

class SessionPage extends React.Component {

    constructor(props) {
        super(props);

        this.inputs = {
            username: React.createRef(),
            password: React.createRef()
        }
    }

    login = (event) => {
        event.preventDefault();
        const loginData = {
            username: this.inputs.username.current.value,
            password: this.inputs.password.current.value
        };
        this.props.dispatch(login(loginData));
    };

    render() {
        if (!this.props.authenticated) {
            return (
                <LoginForm login={this.login}
                           username={this.inputs.username}
                           password={this.inputs.password}/>
            );
        }


        return (
            <div>
                <h2>Session</h2>
                <p>You are authenticated as {this.props.username}.</p>
            </div>
        );
    };
}

export default connect(mapStateToProps)(SessionPage);
