import React from "react";
import { connect } from "react-redux";

import AccountsSection from "../components/accountsSection";
import TransactionsSection from "../components/transactionsSection";
import SessionManager from "../components/sessionManager";


const mapStateToProps = (state) => {
    return {
        session: state.session
    }
};

class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.session.authenticated) {
            return (
                <div>
                    <AccountsSection/>
                    <TransactionsSection/>
                </div>
            );
        }

        return (
            <div>
                <SessionManager />
            </div>
        );
    }
}

export default connect(mapStateToProps)(DashboardPage);
