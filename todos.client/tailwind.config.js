/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                text: {
                    light: "#FFFFFF",
                    dark: "#000000",
                },
                background: {
                    light: "#110B13",
                    dark: "#F2ECF4",
                },
                primary: {
                    light: "#64008F",
                    dark: "#D470FF",
                },
                secondary: {
                    dark: "#1F1424",
                    light: "#E6DBEB",
                },
                accent: {
                    dark: "#719F5B",
                    light: "#719F5B",
                }
            }
        }
   },
  plugins: [],
}