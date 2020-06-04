import React from "react";
import { shallow } from "enzyme";

import { DashboardPage } from "../../pages/dashboard";


describe("<DashboardPage>", () => {

    it("renders a button that redirects to session page is user is not authenticated", () => {
        const historyPush = jest.fn();
        const props = {
            dispatch: jest.fn(),
            history: {
                push: historyPush
            },
            session: {
                authenticated: false
            }
        };

        const wrapper = shallow(<DashboardPage {...props}/>);

        // Check snapshot
        expect(wrapper).toMatchSnapshot();

        // Click button and check that history redirected to /session
        wrapper.find('button').simulate("click");
        expect(props.history.push.mock.calls.length).toEqual(1);
        expect(props.history.push.mock.calls[0][0]).toEqual("/session");
    });

    it("renders accounts and transactions components when user is authenticated", () => {
        const props = {
            dispatch: jest.fn(),
            session: {
                authenticated: true
            }
        };

        const wrapper = shallow(<DashboardPage {...props}/>);
        expect(wrapper).toMatchSnapshot();
    })
});
