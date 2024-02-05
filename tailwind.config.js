/** @type {import("tailwindcss").Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "ivory": "#F4F9FF",
      "chalk": "#F1EFF4",
      "magenta": "#B40056",
      "charcoal": "#1F1F1F",
      "grey": "#525252",
      "orchid": "#8F5BD4",
    },
    fontFamily: {
      "luimp": ["Luimp","serif"],
      "mada": ["Mada","sans-serif"],
    },
    screens: {
      "small":{
        "max":"1030px"
      },
      "large":{
        "min":"1030px"
      }
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      visibility: ["group-hover"],
      backgroundImage: {
        'workBg': "url('/public/others/workBg.webp')",
        'communityBg': "url('/public/others/communityBg.webp')",
        'mentorshipBg': "url('/public/others/mentorshipBg.webp')",
        'awardsBg': "url('/public/others/awardsBg.webp')",
        'projectBg': "url('/public/others/projectBg.webp')",
        'noise': "url('/public/others/noise.svg')",
      },
      cursor: {
        'pin': 'url("/public/icons/pin.svg"), pointer',
      }
    }
  },
  plugins: [
    require("tailwindcss-inner-border"),
  ],
}
