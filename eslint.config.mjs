import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "buildlocales/**",
      ".next/**",
       "build/**",
       "public/**"
    ],
      
    
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, prettier: eslintPluginPrettier, react: pluginReact },
    extends: [
      "js/recommended",
      // "next/core-web-vitals",
      // "plugin:prettier/recommended",
    ],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "prettier/prettier": [
        "error", {
          singleQuote: true,
          semi: true,
          trailingComa: "all",
          endOfLine: "crlf"
        }
      ]
    },
    
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
