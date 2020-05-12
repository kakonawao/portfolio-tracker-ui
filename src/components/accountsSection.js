import React from "react";
import { connect } from "react-redux";

import { fetchAccounts } from "../actions/accounts";


const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
};


class AccountsSection extends React.Component {

    constructor(props) {
        super(props);

        this.props.dispatch(fetchAccounts());
    }

    render() {
        return (
            <div>
                <h2>Accounts</h2>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AccountsSection);
