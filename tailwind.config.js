/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0B1023",
				secondary: "#0D1736",
				success: "#009970",
				danger: "#E75C6A",
			},
			container: {
				center: true,
			},
			screens: {
				xs: "380px",
			},
			blur: {
				xs: "2px",
			},
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
