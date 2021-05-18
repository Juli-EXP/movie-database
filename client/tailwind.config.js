module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)"
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)"
                    },
                }
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-out",
                "fade-in-down": "fade-in-down 1s ease-out"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
