module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "chat-box": "rgba(17, 17, 26, 0.05) 0px 1px 0px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(145deg, rgba(255, 255, 220, 1), rgba(255, 255, 220, 0) 86%), linear-gradient(220deg, rgba(30, 45, 70, 0.75), rgba(0, 45, 70, 0) 40%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

