import React from "react";


class LoginForm extends React.Component {

    render() {
        return (
            <form>
                <div>
                    <label>
                        Username
                        <input type={"text"}
                               name={"username"}
                               ref={this.props.username} />
                    </label>
                    <label>
                        Password
                        <input type={"password"}
                               name={"password"}
                               ref={this.props.password} />
                    </label>
                </div>
                <div>
                    <button type={"submit"}
                            onClick={this.props.login}>
                        Login
                    </button>
                </div>
            </form>
        );
    }
}

export default LoginForm;
