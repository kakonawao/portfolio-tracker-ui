import { accountsReducer } from "../../reducers/accounts";
import {
    failAccounts,
    receiveAccounts,
    requestAccounts
} from "../../actions/accounts";


describe("accountsReducer", () => {
    it("sets loading and resets error on request", () => {
        const state = {
            loading: false,
            error: new Error("some error"),
            items: []
        };

        const newState = accountsReducer(state, requestAccounts());

        expect(newState).toEqual({
            loading: true,
            error: null,
            items: []
        });
    });

    it("sets error and resets loading on failure", () => {
        const state = {
            loading: true,
            error: null,
            items: []
        };

        const er = new Error("potato");
        const newState = accountsReducer(state, failAccounts(er));

        expect(newState).toEqual({
            loading: false,
            error: er,
            items: []
        });
    });

    it("resets loading and sets items on success", () => {
        const state = {
            loading: true,
            error: null,
            items: []
        };

        const accountData = {code: "1", name: "potato account"};
        const newState = accountsReducer(state, receiveAccounts([accountData]));

        expect(newState).toEqual({
            loading: false,
            error: null,
            items: [accountData]
        });
    });
});