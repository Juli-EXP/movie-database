module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                "accent-primary": "var(--accent-primary)",
                "accent-secondary": "var(--accent-primary)",
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
                },
                "on-hover": {
                    "0%": {
                        transform: "translateX(0) translateY(0)"
                    },
                    "100%": {
                        transform: "translateX(10) translateY(10)"
                    },
                },
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-out",
                "fade-in-down": "fade-in-down 1s ease-out",
                "on-hover": "on-hover 3s ease-out",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
