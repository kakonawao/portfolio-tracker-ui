import { sessionReducer } from "../../reducers/session";
import {
    failToken,
    requestToken,
    receiveToken
} from "../../actions/session";


describe("sessionReducer", () => {
    it("sets loading and resets everything else on request", () => {
        const state = {
            loading: false,
            error: new Error("auth failure"),
            authenticated: true,
            username: "peter",
            token: "mytoken",
            tokenType: "bearer"
        };

        const newState = sessionReducer(state, requestToken());

        expect(newState).toEqual({
            loading: true,
            error: null,
            authenticated: false,
            username: null,
            token: null,
            tokenType: null
        })
    });

    it("sets error and resets loading on failure", () => {
        const state = {
            loading: true,
            error: null,
            authenticated: false,
            username: null,
            token: null,
            tokenType: null
        };

        const err = new Error("password wrong");
        const newState = sessionReducer(state, failToken(err));

        expect(newState).toEqual({
            ...state,
            loading: false,
            error: err
        });
    });

    it("resets loading and sets authentication data on success", () => {
        const state = {
            loading: true,
            error: null,
            authenticated: false,
            username: null,
            token: null,
            tokenType: null
        };

        const tokenResponse = {
            username: "mike",
            token: "mikestoken",
            tokenType: "bearer"
        };
        const newState = sessionReducer(state, receiveToken(tokenResponse));

        expect(newState).toEqual({
            loading: false,
            error: null,
            authenticated: true,
            username: "mike",
            token: "mikestoken",
            tokenType: "bearer"
        });
    });
});
