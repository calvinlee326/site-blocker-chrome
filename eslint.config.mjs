export default [
  {
    ignores: ["node_modules/**"]
  },
  {
    files: ["*.js"],
    languageOptions: {
      sourceType: "module",
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];
