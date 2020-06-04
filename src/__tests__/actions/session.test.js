jest.mock("cross-fetch");
import fetch from "cross-fetch";

import {
    REQUEST_TOKEN,
    RECEIVE_TOKEN,
    FAIL_TOKEN,
    login
} from "../../actions/session";


describe("login", () => {
    const loginData = {
        username: "potato",
        password: "fr13d"
    };
    const mockDispatch = jest.fn();

    it("dispatches requestToken and receiveToken on success", async () => {
        mockDispatch.mockClear();
        fetch.mockReturnValue(Promise.resolve({
            ok: true,
            json: jest.fn().mockReturnValue({
                username: "potato",
                access_token: "mytoken",
                token_type: "bearer"
            })
        }));

        await login(loginData)(mockDispatch);

        expect(mockDispatch.mock.calls.length).toEqual(2);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
            type: REQUEST_TOKEN
        });
        expect(mockDispatch.mock.calls[1][0]).toEqual({
            type: RECEIVE_TOKEN,
            data: {
                username: "potato",
                tokenType: "bearer",
                token: "mytoken"
            }
        });
    });

    it("dispatches requestToken and failToken on failure", async () => {
        mockDispatch.mockClear();
        fetch.mockReturnValue(Promise.resolve({
            ok: false,
            json: jest.fn().mockReturnValue({detail: "incorrect password or whatever"})
        }));

        await login(loginData)(mockDispatch);

        expect(mockDispatch.mock.calls.length).toEqual(2);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
            type: REQUEST_TOKEN
        });
        expect(mockDispatch.mock.calls[1][0]).toEqual({
            type: FAIL_TOKEN,
            error: new Error("incorrect password or whatever")
        });
    });
});