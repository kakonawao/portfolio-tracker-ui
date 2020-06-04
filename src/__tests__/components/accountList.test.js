import React from "react";
import { shallow } from "enzyme";

import AccountList from "../../components/accountsList";


describe("<AccountList>", () => {
    it("renders mesage when data is loading", () => {
        const props = {
            data: {
                loading: true,
                items: []
            }
        };

        const wrapper = shallow(<AccountList {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders empty list", () => {
        const props = {
            data: {
                loading: false,
                items: []
            }
        };

        const wrapper = shallow(<AccountList {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders list when items are present", () => {
        const props = {
            data: {
                loading: false,
                items: [
                    {
                        code: "1",
                        description: "bank account",
                        holder: {
                            name: "Bank of Ireland"
                        }
                    },
                    {
                        code: "2",
                        description: "cash account",
                        holder: null
                    }
                ]
            }
        };

        const wrapper = shallow(<AccountList {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
