import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // In your own projects it's enough to add this only to the index.css file.
    // In our case the preview editor on frontend.fyi struggles with extracting these
    // classnames from index.css and generate the proper classnames in the fly.
    // That's why in that case we've added the utilities here too, because they ARE picked up.
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".mask-legend": {
          maskImage: `linear-gradient(
            transparent,
            black 45%,
            black 55%,
            transparent 100%
          )`,
        },
      });
    }),
  ],
};
