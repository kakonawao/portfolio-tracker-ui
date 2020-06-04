
import { institutionsReducer } from "../../reducers/institutions";
import {
    failInstitutions,
    receiveInstitutions,
    requestInstitutions
} from "../../actions/institutions";


describe("institutionsReducer", () => {
    it("sets loading and reset error on request", () => {
        const state = {
            loading: false,
            error: new Error("potato"),
            items: []
        };

        const newState = institutionsReducer(state, requestInstitutions());

        expect(newState).toEqual({
            loading: true,
            error: null,
            items: []
        });
    });

    it("resets loading and sets error on failure", () => {
        const state = {
            loading: true,
            error: null,
            items: []
        };

        const er = new Error("our of potatoes");
        const newState = institutionsReducer(state, failInstitutions(er));

        expect(newState).toEqual({
            loading: false,
            error: er,
            items: []
        });
    });

    it("resets error and sets items on receive", () => {
        const state = {
            loading: true,
            error: null,
            items: []
        };
        const institutionData = {
            code: "BOI",
            name: "Bank of Ireland"
        };

        const newState = institutionsReducer(state, receiveInstitutions([institutionData]));

        expect(newState).toEqual({
            loading: false,
            error: null,
            items: [institutionData]
        });
    });
});