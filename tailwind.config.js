/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TS files in the `src` folder
        "./public/index.html",       // Include the HTML file if applicable
      ],
    theme: {
        extend: {
            boxShadow: {
                intense: '0px 0px 16px rgba(17, 17, 26, 0.1)',
            },
        },
    },
    plugins: [],
}

