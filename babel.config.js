// Babel Config file for jest

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "module-resolver",
      {
        alias: {
          "^pages/(.*)$": "./src/pages/$1", // Import Config for Pages
          "^components/(.*)$": "./src/components/$1", // Import config for Components
          "^styles/(.*)$": "./src/styles/$1", // Import config for styles
          "^shared/(.*)$": "./src/shared/$1", // Import config for shared
        },
      },
    ],
  ],
};
