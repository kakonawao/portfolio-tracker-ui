import React from "react";

import AccountItem from "./accountItem";


class AccountsList extends React.Component {

    renderLoading() {
        return (
            <p>Loading accounts...</p>
        )
    }

    renderEmpty() {
        return (
            <p>You have no accounts.</p>
        )
    }

    renderList(items) {
        return (
            items.map(i =>
                <AccountItem code={i.code} description={i.description} holder={i.holder}/>
            )
        );
    }

    render () {
        if (this.props.data.loading) {
            return this.renderLoading();
        } else if (this.props.data.items.length === 0) {
            return this.renderEmpty();
        } else {
            return this.renderList(this.props.data.items);
        }
    }
}

export default AccountsList;
