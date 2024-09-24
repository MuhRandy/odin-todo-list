// eslint-disable-next-line no-undef
const js = require("@eslint/js");

// eslint-disable-next-line no-undef
module.exports = [
  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
