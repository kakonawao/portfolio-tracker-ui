import React from "react";


class AccountItem extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.code}: {this.props.description} ({this.props.holder ? this.props.holder.name : "N/A"})</p>
            </div>
        )
    }
}

export default AccountItem;
