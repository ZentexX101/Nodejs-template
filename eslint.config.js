module.exports = [
	{
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "commonjs",
			globals: {
				console: "readonly",
				module: "readonly",
				require: "readonly",
				__dirname: "readonly",
			},
		},

		plugins: {
			js: require("@eslint/js"),
		},
		rules: {
			"no-unused-vars": "warn",
			"no-undef": ["error", { typeof: true }],
			"no-unused-expressions": "warn",
			"no-console": "warn",
			"no-redeclare": "warn",
			eqeqeq: ["error", "always", { null: "ignore" }],
			"no-extra-semi": "error",
			"no-unreachable": "error",
		},
	},
];
