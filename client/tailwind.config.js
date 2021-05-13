module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: "#161616",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
