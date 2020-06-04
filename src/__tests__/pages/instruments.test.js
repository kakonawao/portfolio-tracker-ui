import React from "react";
import { shallow } from "enzyme";

import { InstrumentsPage } from "../../pages/instruments";


describe("<InstrumentsPage>", () => {

    it("renders", () => {
        const props = {
            dispatch: jest.fn()
        };

        const wrapper = shallow(<InstrumentsPage {...props}/>);
        expect(wrapper).toMatchSnapshot();
    })
});
