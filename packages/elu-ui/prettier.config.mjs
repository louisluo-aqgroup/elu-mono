import baseConfig from "@workspace/prettier-config"

export default {
  ...baseConfig,
  plugins: [...baseConfig.plugins, "prettier-plugin-tailwindcss"],
}
