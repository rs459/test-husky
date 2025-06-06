import js from "@eslint/js";
import html from "eslint-plugin-html";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
	js.configs.recommended, // Règles JS recommandées par ESLint
	{
		// Règles spécifiques aux fichiers JS/MJS/CJS
		files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			"no-unused-vars": "warn",
			"no-console": "warn",
			quotes: ["error", "double"],
		},
		// Exclure explicitement les fichiers de configuration du linting ESLint
		ignores: [
			"node_modules/",
			"dist/",
			"build/",
			"eslint.config.js",
			".prettierrc",
			"stylelint.config.js",
			"html-validate.json",
		],
	},
	{
		// Règles spécifiques aux fichiers HTML
		files: ["**/*.html"],
		plugins: { html },
		languageOptions: {
			globals: {
				...globals.browser, // Pour que "console" soit reconnu dans les scripts HTML embarqués
			},
		},
		rules: {
			"no-console": "warn", // Exemple: autorise console.log mais avertit dans les scripts HTML
		},
	},
	// Configurations pour Prettier - DOIVENT ÊTRE LES DERNIÈRES DANS LE TABLEAU
	// eslint-config-prettier désactive les règles d'ESLint qui peuvent entrer en conflit avec Prettier
	prettierConfig,
	// eslint-plugin-prettier ajoute la règle "prettier/prettier"
	{
		rules: {
			"prettier/prettier": "error", // Fait de toutes les différences de formatage des erreurs ESLint
		},
		plugins: {
			prettier: prettierPlugin,
		},
	},
];
