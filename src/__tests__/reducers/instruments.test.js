import { instrumentsReducer } from "../../reducers/instruments";
import {
    failInstruments,
    receiveInstruments,
    requestInstruments
} from "../../actions/instruments";


describe("instrumentsReducer", () => {
    it("resets error and sets loading on request", () => {
        const state = {
            loading: false,
            error: new Error("first failure"),
            items: []
        };

        const newState = instrumentsReducer(state, requestInstruments());

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

        const err = new Error("request failed");
        const newState = instrumentsReducer(state, failInstruments(err));

        expect(newState).toEqual({
            loading: false,
            error: err,
            items: []
        });
    });

    it("resets loading and sets items on receive", () => {
        const state = {
            loading: true,
            error: null,
            items: []
        };

        const instrumentData = {code: "EUR", name: "Euro"};
        const newState = instrumentsReducer(state, receiveInstruments([instrumentData]));

        expect(newState).toEqual({
            loading: false,
            error: null,
            items: [instrumentData]
        });
    });
});
