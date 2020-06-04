import React from "react";
import { shallow } from "enzyme";

import { AccountsSection } from "../../components/accountsSection";

describe("<AccountsSection>", () => {

    it("renders account list sub component", () => {
        const props = {
            session: {
                loading: false,
                authenticated: false,
                username: null,
                token: null,
                tokenType: null
            },
            data: {
                loading: true,
                items: []
            },
            dispatch: jest.fn()
        };

        const wrapper = shallow(<AccountsSection {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
