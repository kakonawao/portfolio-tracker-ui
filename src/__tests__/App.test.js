import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import { store } from "../store";
import App from "../App";


test("", () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const linkElement = getByText(/Dashboard/i);
    expect(linkElement).toBeInTheDocument();
});
