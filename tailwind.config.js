export default {
    content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" }, // 2 pistas → movemos la mitad
                },
            },
            animation: {
                marquee: "marquee 20s linear infinite",
            },
        },
    },
    plugins: [],
};