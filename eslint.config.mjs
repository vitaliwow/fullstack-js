import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";

export default [
	// Ignoring
	{
		ignores: ["**/dist/**", "**/node_modules/**", "**/*.config.js"],
	},

	// BACKEND JS
	{
		files: ["backend/**/*.js"],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: "module",
		},
		plugins: {
			import: importPlugin,
		},
		rules: {
			"no-console": ["error", { allow: ["info", "warn", "error"] }],
			"curly": ["error", "all"],
			"no-irregular-whitespace": ["error", { skipTemplates: true, skipStrings: true }],
			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
					pathGroups: [
						{ pattern: "@trpc/**", group: "external", position: "after" },
						{ pattern: "../../backend/**", group: "internal", position: "after" },
					],
					pathGroupsExcludedImportTypes: ["builtin"],
					alphabetize: { order: "asc", caseInsensitive: false },
					"newlines-between": "always",
					distinctGroup: true,
				},
			],
		},
	},

	// BACKEND TS
	{
		files: ["backend/**/*.ts"],
		languageOptions: {
			parser: parser,
			parserOptions: {
				project: false,
			},
		},
		plugins: {
			"@typescript-eslint": tseslint,
			import: importPlugin,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			"no-console": ["error", { allow: ["info", "warn", "error"] }],
			"curly": ["error", "all"],
			"no-irregular-whitespace": ["error", { skipTemplates: true, skipStrings: true }],
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/strict-boolean-expressions": "off",
			"@typescript-eslint/prefer-nullish-coalescing": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/restrict-template-expressions": "off",
			"@typescript-eslint/triple-slash-reference": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/consistent-type-assertions": "off",
			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
					pathGroups: [
						{ pattern: "@trpc/**", group: "external", position: "after" },
						{ pattern: "../../backend/**", group: "internal", position: "after" },
					],
					pathGroupsExcludedImportTypes: ["builtin"],
					alphabetize: { order: "asc", caseInsensitive: false },
					"newlines-between": "always",
					distinctGroup: true,
				},
			],
		},
	},

	// WEBAPP TS/TSX
	{
		files: ["webapp/**/*.{ts,tsx}"],
		languageOptions: {
			parser: parser,
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: new URL("./webapp", import.meta.url).pathname,
			},
		},
		plugins: {
			"@typescript-eslint": tseslint,
			"react-refresh": reactRefresh,
			import: importPlugin,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			"react-refresh/only-export-components": "off",
			"no-console": ["error", { allow: ["info", "warn", "error"] }],
			"curly": ["error", "all"],
			"no-irregular-whitespace": ["error", { skipTemplates: true, skipStrings: true }],
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/strict-boolean-expressions": "off",
			"@typescript-eslint/prefer-nullish-coalescing": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/restrict-template-expressions": "off",
			"@typescript-eslint/triple-slash-reference": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/consistent-type-assertions": "off",
			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
					pathGroups: [
						{ pattern: "@trpc/**", group: "external", position: "after" },
						{ pattern: "../../backend/**", group: "internal", position: "after" },
					],
					pathGroupsExcludedImportTypes: ["builtin"],
					alphabetize: { order: "asc", caseInsensitive: false },
					"newlines-between": "always",
					distinctGroup: true,
				},
			],
		},
	},

	// VITE CONFIG
	{
		files: ["webapp/vite.config.ts"],
		languageOptions: {
			parser: parser,
			parserOptions: {
				project: "./tsconfig.node.json",
				tsconfigRootDir: new URL("./webapp", import.meta.url).pathname,
			},
		},
		plugins: {
			"@typescript-eslint": tseslint,
			"react-refresh": reactRefresh,
			import: importPlugin,
		},
		rules: {
			"react-refresh/only-export-components": "off",
			"no-console": ["error", { allow: ["info", "warn", "error"] }],
			"curly": ["error", "all"],
			"no-irregular-whitespace": ["error", { skipTemplates: true, skipStrings: true }],
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/strict-boolean-expressions": "off",
			"@typescript-eslint/prefer-nullish-coalescing": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/restrict-template-expressions": "off",
			"@typescript-eslint/triple-slash-reference": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/consistent-type-assertions": "off",
		},
	},
];
