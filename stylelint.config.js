// stylelint.config.js
/** @type {import("stylelint").Config} */
export default {
	extends: ["stylelint-config-standard", "stylelint-config-recommended-scss"],
	ignoreFiles: ["**/node_modules/**", "**/dist/**", "**/build/**"],
	plugins: [],
	rules: {
		// Règle corrigée et fonctionnelle pour les sélecteurs composés
		"selector-max-compound-selectors": [
			3, // La limite est de 3 sélecteurs composés
			{
				severity: "error", // Définit la sévérité comme une erreur
				message: "Trop de sélecteurs composés. Maximum est 3.", // Message personnalisé
			},
		],
		// Règle pour la profondeur d'imbrication
		"max-nesting-depth": [
			2, // La limite est de 2 niveaux d'imbrication
			{
				message: "Profondeur d'imbrication trop élevée. Maximum est 2.", // Message personnalisé
			},
		],
		// Règle pour les at-rules inconnues, avec les exceptions Tailwind
		"at-rule-no-unknown": [
			true, // Active la règle
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"variants",
					"responsive",
					"screen",
				],
			},
		],
		"declaration-property-value-no-unknown": true,
		"property-no-unknown": true,
		// Permettre la syntaxe BEM (Block__Element--Modifier) avec kebab-case
		// et interdire les noms de classe qui commencent par une majuscule.
		"selector-class-pattern":
			"^([a-z][a-z0-9]*)(-[a-z0-9]+)*(?:__([a-z][a-z0-9]*)(-[a-z0-9]+)*)?(?:--([a-z][a-z0-9]*)(-[a-z0-9]+)*)?$",
	},
};
