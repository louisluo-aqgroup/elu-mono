import nextVitals from 'eslint-config-next/core-web-vitals'
import eslintConfigPrettier from "eslint-config-prettier";
import unusedImports from "eslint-plugin-unused-imports"

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const nextJsConfig = [
  ...nextVitals,
  eslintConfigPrettier,
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "react/jsx-sort-props": "warn",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "react/no-unescaped-entities": "off",
    },
  },
];
