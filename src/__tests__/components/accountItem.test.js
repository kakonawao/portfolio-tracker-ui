import React from "react";
import { shallow } from "enzyme";

import AccountItem from "../../components/accountItem";


describe("<AccountItem>", () => {
    it("renders account data with holder", () => {
        const props = {
            key: "1",
            code: "1",
            description: "bank account",
            holder: {
                name: "Bank of Ireland"
            }
        };

        const wrapper = shallow(<AccountItem {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders account data without holder", () => {
        const props = {
            key: "2",
            code: "2",
            description: "cash account",
            holder: null
        };

        const wrapper = shallow(<AccountItem {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
