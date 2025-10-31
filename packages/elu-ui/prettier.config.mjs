import baseConfig from "@eluelu/prettier-config"

export default {
  ...baseConfig,
  plugins: [...baseConfig.plugins, "prettier-plugin-tailwindcss"],
}
