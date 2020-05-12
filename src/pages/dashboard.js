import React from "react";

import AccountsSection from "../components/accountsSection";
import TransactionsSection from "../components/transactionsSection";


class DashboardPage extends React.Component {

    render() {
        return (
            <div>
                <AccountsSection />
                <TransactionsSection />
            </div>
        )
    }
}

export default DashboardPage;
