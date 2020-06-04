
jest.mock("cross-fetch");
import fetch from "cross-fetch";

import {
    REQUEST_ACCOUNTS,
    RECEIVE_ACCOUNTS,
    FAIL_ACCOUNTS,
    fetchAccounts
} from "../../actions/accounts";


describe("fetchAccounts", () => {
    const sessionData = {
        tokenType: "bearer",
        token: "mysecrettoken"
    };
    const mockDispatch = jest.fn();

    it("dispatches requestAccounts and receiveAccounts on success", async () => {
        mockDispatch.mockClear();
        fetch.mockReturnValue(Promise.resolve({
            ok: true,
            json: jest.fn().mockReturnValue([{id: "4"}])
        }));

        await fetchAccounts(sessionData)(mockDispatch);

        expect(mockDispatch.mock.calls.length).toEqual(2);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
            type: REQUEST_ACCOUNTS
        });
        expect(mockDispatch.mock.calls[1][0]).toEqual({
            type: RECEIVE_ACCOUNTS,
            data: [{id: "4"}]
        });

    });

    it("dispatches requestAccounts and failAccounts on failure", async () => {
        mockDispatch.mockClear();
        fetch.mockReturnValue(Promise.resolve({
            ok: false,
            json: jest.fn().mockReturnValue({detail: "503 server is down"})
        }));

        await fetchAccounts(sessionData)(mockDispatch);

        expect(mockDispatch.mock.calls.length).toEqual(2);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
            type: REQUEST_ACCOUNTS
        });
        expect(mockDispatch.mock.calls[1][0]).toEqual({
            type: FAIL_ACCOUNTS,
            error: new Error("503 server is down")
        });
    });
});
