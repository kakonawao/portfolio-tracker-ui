import React from "react";
import { shallow } from "enzyme";

import LoginForm from "../../components/loginForm";


describe("<LoginForm>", () => {
    it("renders form", () => {
        const props = {
            username: jest.fn(),
            password: jest.fn(),
            login: jest.fn()
        };

        const wrapper = shallow(<LoginForm {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
