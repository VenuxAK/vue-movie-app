/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0B1023",
				secondary: "#0D1736",
				success: "#009970",
				danger: "#FF2c1f",
				warning: "#FAEE04",
				info: "#0EABF8",
				pinky: "#F44B68",
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
