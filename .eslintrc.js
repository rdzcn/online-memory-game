module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  globals: {
    expect: true,
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  root: true,
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { accessibility: "no-public" },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "public-static-field",
          "protected-static-field",
          "private-static-field",

          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",

          "public-field",
          "protected-field",
          "private-field",

          "static-field",
          "instance-field",

          "field",

          "constructor",

          "static-method",
          "public-static-method",
          "protected-static-method",
          "private-static-method",

          "instance-method",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",

          "public-method",
          "protected-method",
          "private-method",

          "method",
        ],
      },
    ],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "arrow-body-style": "off",
    camelcase: 0,
    "class-methods-use-this": 0,
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/href-no-hash": 0,
    "no-bitwise": 0,
    "linebreak-style": ["error", "unix"],
    "no-console": [2, { allow: ["warn", "error", "info", "log"] }],
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 1,
    "no-else-return": ["error", { allowElseIf: true }],
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 1 }],
    // "no-param-reassign": [2, { props: false }],
    "no-trailing-spaces": "error",
    "prefer-destructuring": [
      "error",
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
        VariableDeclarator: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "react/jsx-child-element-spacing": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": "error",
    "react/jsx-max-depth": [2, { max: 8 }],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-pascal-case": [1, { allowAllCaps: true }],
    "react/jsx-props-no-multi-spaces": "warn",
    "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-access-state-in-setstate": "error",
    "react/prefer-es6-class": "error",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "error",
    "react/sort-comp": 0,
    "react-hooks/rules-of-hooks": "warn",
    "react/jsx-curly-brace-presence": 0,
    "react-hooks/exhaustive-deps": "off",
    "space-infix-ops": "off",
    "valid-jsdoc": "off",
  },
};

