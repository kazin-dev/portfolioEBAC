import config from "eslint-config-standard";


export default {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "react-app",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "react",
    "jsx-a11y",
    "react-hooks"
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    // Coloque suas regras personalizadas aqui
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react/prop-types": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};




