import React from "react";
import { connect } from "react-redux";

import { fetchAccounts } from "../actions/accounts";
import AccountsList from "./accountsList";


const mapStateToProps = (state) => {
    return {
        session: state.session,
        data: state.accounts
    }
};

export class AccountsSection extends React.Component {

    constructor(props) {
        super(props);

        this.props.dispatch(fetchAccounts(this.props.session));
    }

    render() {
        return (
            <div>
                <h2>Accounts</h2>
                <AccountsList data={this.props.data}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AccountsSection);
