module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^..supabaseClient$": "<rootDir>/src/__mocks__/supabaseClient.js",
  },
};
