jest.mock("cross-fetch");
import fetch from "cross-fetch";

import {
    REQUEST_INSTITUTIONS,
    RECEIVE_INSTITUTIONS,
    FAIL_INSTITUTIONS,
    fetchInstitutions
} from "../../actions/institutions";


describe("fetchInstitutions", () => {
    const sessionData = {
        token: "mytoken",
        tokenType: "bearer"
    };
    const mockDispatch = jest.fn();

    it("dispatches request and receive on successful response", async () => {
        mockDispatch.mockClear();
        fetch.mockReturnValue(Promise.resolve({
            ok: true,
            json: jest.fn().mockReturnValue([{code: "BOI", name: "Bank of Ireland"}])
        }));

        await fetchInstitutions(sessionData)(mockDispatch);

        expect(mockDispatch.mock.calls.length).toEqual(2);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
            type: REQUEST_INSTITUTIONS
        });
        expect(mockDispatch.mock.calls[1][0]).toEqual({
            type: RECEIVE_INSTITUTIONS,
            data: [{code: "BOI", name: "Bank of Ireland"}]
        });
    });

    it("dispatches request and fail on failed response", async () => {
        mockDispatch.mockClear();
        fetch.mockReturnValue(Promise.resolve({
            ok: false,
            json: jest.fn().mockReturnValue({detail: "404 Not found"})
        }));

        await fetchInstitutions(sessionData)(mockDispatch);

        expect(mockDispatch.mock.calls.length).toEqual(2);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
            type: REQUEST_INSTITUTIONS
        });
        expect(mockDispatch.mock.calls[1][0]).toEqual({
            type: FAIL_INSTITUTIONS,
            error: new Error("404 Not found")
        });
    });
});