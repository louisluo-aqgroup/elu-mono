import { createRequire } from "module"
import { pathToFileURL } from "url"
import * as sortImportsPlugin from "@trivago/prettier-plugin-sort-imports"

const sortImports = sortImportsPlugin?.default ?? sortImportsPlugin
const tailwindcss = await loadTailwindPlugin()

/** @type {import("prettier").Config} */
export default {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: [sortImports, tailwindcss].filter(Boolean),
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

async function loadTailwindPlugin() {
  const requireFromConfig = createRequire(import.meta.url)

  const attempts = [
    () => import("prettier-plugin-tailwindcss"),
    () => importResolved(requireFromConfig, "prettier-plugin-tailwindcss"),
  ]

  for (const attempt of attempts) {
    try {
      const mod = await attempt()
      return mod?.default ?? mod
    } catch (error) {
      if (!isMissingModuleError(error)) {
        throw error
      }
    }
  }

  return null
}

async function importResolved(resolver, specifier) {
  try {
    const resolvedPath = resolver.resolve(specifier, { paths: [process.cwd()] })
    return import(pathToFileURL(resolvedPath).href)
  } catch (error) {
    if (isMissingModuleError(error)) {
      throw error
    }

    throw error
  }
}

function isMissingModuleError(error) {
  return (
    error?.code === "MODULE_NOT_FOUND" ||
    error?.code === "ERR_MODULE_NOT_FOUND"
  )
}
