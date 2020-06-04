import React from "react";
import { connect } from "react-redux";

import AccountsSection from "../components/accountsSection";
import TransactionsSection from "../components/transactionsSection";


const mapStateToProps = (state) => {
    return {
        session: state.session
    }
};

export class DashboardPage extends React.Component {

    renderUserData = () => {
        return (
            <div>
                <AccountsSection />
                <TransactionsSection />
            </div>
        );
    };

    renderLoginRequired = () => {
        return (
            <div>
                <h2>Login Required</h2>
                <p>You need to log in first.</p>
                <button onClick={this.redirectToSessionPage}>Log in</button>
            </div>
        )
    };

    redirectToSessionPage = () => {
        this.props.history.push("/session");
    };

    render() {
        if (this.props.session.authenticated) {
            return this.renderUserData();
        } else {
            return this.renderLoginRequired();
        }
    }
}

export default connect(mapStateToProps)(DashboardPage);
