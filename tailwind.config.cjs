/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 3s linear infinite",
				"scale-up-down": "scale-up-down .6s linear infinite",
			},
			keyframes: {
				"scale-up-down": {
					"0%, 100%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.05)" },
				},
			},
		},
	},
	plugins: [],
};
