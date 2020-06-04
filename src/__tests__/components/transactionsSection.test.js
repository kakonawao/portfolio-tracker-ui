import React from "react";
import { shallow } from "enzyme";

import { TransactionsSection } from "../../components/transactionsSection";


describe("<TransactionsSection>", () => {

    it("renders", () => {
        const props = {};

        const wrapper = shallow(<TransactionsSection {...props} />);
        expect(wrapper).toMatchSnapshot();
    })
});
