import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import tseslint from "typescript-eslint"
import turboPlugin from "eslint-plugin-turbo"
import onlyWarn from "eslint-plugin-only-warn"

export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: { turbo: turboPlugin, onlyWarn },
    rules: { "turbo/no-undeclared-env-vars": "warn" },
  },
  {
    // Disable type-aware linting for config files
    files: ["**/*.config.{js,mjs,cjs,ts,mts,cts}"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: ["dist/**", "build/**", "node_modules/**"],
  },
]
