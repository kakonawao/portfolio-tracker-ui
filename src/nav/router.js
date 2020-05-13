import React from "react";
import {
    BrowserRouter,
    Link,
    Switch,
    Route,
} from "react-router-dom";

import DashboardPage from "../pages/dashboard";
import InstitutionsPage from "../pages/institutions";
import InstrumentsPage from "../pages/instruments";
import SessionPage from "../components/sessionManager";


export default function NavigationRouter() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/institutions">Institutions</Link>
                        </li>
                        <li>
                            <Link to="/instruments">Instruments</Link>
                        </li>
                        <li>
                            <Link to="/session">Session</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/session">
                        <SessionPage />
                    </Route>
                    <Route path="/institutions">
                        <InstitutionsPage />
                    </Route>
                    <Route path="/instruments">
                        <InstrumentsPage />
                    </Route>
                    <Route path="/">
                        <DashboardPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
