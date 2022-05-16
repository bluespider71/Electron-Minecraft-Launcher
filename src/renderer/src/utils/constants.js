export default {
    API: import.meta.env.VITE_API_DOMAIN + ":" + import.meta.env.VITE_API_PORT,

    HEADER: {
        AUTHENTICATION: "x-auth",
    },
};
