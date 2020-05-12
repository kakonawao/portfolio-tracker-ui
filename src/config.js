
const SERVICE_HOSTNAME = "http://localhost:8000";

export const PATHS = {
    SESSION: "/sessions",
    ACCOUNTS: "/accounts",
    INSTITUTIONS: "/institutions",
    INSTRUMENTS: "/instruments",
    TRANSACTIONS: "/transactions"
};


export const getEndpoint = (path) => {
    return `${SERVICE_HOSTNAME}${path}`;
};
