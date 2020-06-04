import React from "react";
import { shallow } from "enzyme";

import { InstitutionsPage } from "../../pages/institutions";


describe("<InstitutionsPage>", () => {

    it("renders", () => {
        const props = {
            dispatch: jest.fn()
        };

        const wrapper = shallow(<InstitutionsPage {...props}/>);
        expect(wrapper).toMatchSnapshot();
    })
});
