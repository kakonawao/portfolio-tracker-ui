import React from "react";
import { shallow } from "enzyme";

import { SessionPage } from "../../pages/session";
import { LoginForm } from "../../components/loginForm";
import { login } from "../../actions/session";

jest.mock("../../actions/session");


describe("<SessionPage>", () => {

    it("user can log in when user is not authenticated", () => {
        // Shallow-render
        const props = {
            dispatch: jest.fn(),
            autenticated: false,
            username: null
        };
        const wrapper = shallow(<SessionPage {...props}/>);

        // Validate snapshot
        expect(wrapper).toMatchSnapshot();

        // Simulate login action
        wrapper.instance().inputs.username.current = {value: "peter"};
        wrapper.instance().inputs.password.current = {value: "6r1ff1n"};
        const ev = { preventDefault: jest.fn()};
        wrapper.find("LoginForm").props().login(ev);

        // Validate login action was dispatched correctly
        expect(ev.preventDefault.mock.calls.length).toBe(1);
        expect(login.mock.calls[0][0]).toEqual({username: "peter", password: "6r1ff1n"});
        expect(props.dispatch.mock.calls.length).toBe(1);
    });

    it("renders username when user is authenticated", () => {
        // Shallow-render
        const props = {
            dispatch: jest.fn(),
            authenticated: true,
            username: "potato"
        };
        const wrapper = shallow(<SessionPage {...props}/>);

        // Validate snapshot
        expect(wrapper).toMatchSnapshot();
    });
});
