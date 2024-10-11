/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
			animation: {
        aurora: "aurora 60s linear infinite",
      },
			keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
  		fontFamily: {
				pacifico: ['Pacifico', 'sans-serif'],
  			marker: ['Permanent Marker', 'sans-serif'],
  			space: ['Space Mono', 'monospace'],
				lexend: ['Lexend', 'sans-serif'],
  		},
  		borderRadius: {
				lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
	plugins: [addVariablesForColors],
  plugins: [require("tailwindcss-animate")],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}