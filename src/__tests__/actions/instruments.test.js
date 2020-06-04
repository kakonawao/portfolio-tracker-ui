jest.mock("cross-fetch");
import fetch from "cross-fetch";

import {
    REQUEST_INSTRUMENTS,
    RECEIVE_INSTRUMENTS,
    FAIL_INSTRUMENTS,
    fetchInstruments
} from "../../actions/instruments";


describe("fetchInstruments", () => {
    const sessionData = {
        token: "sometoken",
        tokenType: "bearer"
    };
    const mockDispatch = jest.fn();

    it("dispatches request and receive when response succeeds", async () => {
        mockDispatch.mockClear();
        fetch.mockReturnValue(Promise.resolve({
            ok: true,
            json: jest.fn().mockReturnValue([{code: "EUR", name: "Euro"}])
        }));

        await fetchInstruments(sessionData)(mockDispatch);

        expect(mockDispatch.mock.calls.length).toEqual(2);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
            type: REQUEST_INSTRUMENTS
        });
        expect(mockDispatch.mock.calls[1][0]).toEqual({
            type: RECEIVE_INSTRUMENTS,
            data: [{code: "EUR", name: "Euro"}]
        });
    });

    it("dispatches request and fail when response fails", async () => {
        mockDispatch.mockClear();
        fetch.mockReturnValue(Promise.resolve({
            ok: false,
            json: jest.fn().mockReturnValue({detail: "400 bad data"})
        }));

        await fetchInstruments(sessionData)(mockDispatch);

        expect(mockDispatch.mock.calls.length).toEqual(2);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
            type: REQUEST_INSTRUMENTS
        });
        expect(mockDispatch.mock.calls[1][0]).toEqual({
            type: FAIL_INSTRUMENTS,
            error: new Error("400 bad data")
        });
    });
});