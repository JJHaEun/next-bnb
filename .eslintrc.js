modue.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "jsx-quotes": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/padding-line-between-statements": "off",
    "arrow-body-style": "off",
    "capitalized-comments": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/naming-convention": "off",
  },
};
