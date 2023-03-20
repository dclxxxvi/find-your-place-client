module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['tsconfig.json'],
	},
	plugins: ['react', 'react-hooks'],
	rules: {
		semi: ['off'],
		'@typescript-eslint/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
		indent: ['error', 'tab'],
		'@typescript-eslint/indent': ['error', 'tab'],
		'no-tabs': 'off',
		'no-console': 'warn',
		'brace-style': 'error',
		'no-extra-semi': 'error',
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
		'array-bracket-newline': 'error',
		'array-bracket-spacing': 'error',
		'comma-style': 'error',
		'comma-spacing': 'error',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'@typescript-eslint/explicit-function-return-type': ['off'],
		'max-len': ['warn', { code: 120 }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/prop-types': 'off',
		'eol-last': 'error',
		'@typescript-eslint/member-delimiter-style': [
			'warn',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': ['error', 'never'],
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'@typescript-eslint/no-unnecessary-type-assertion': 'off',
		"@typescript-eslint/no-misused-promises": [2, {
			"checksVoidReturn": {
				"attributes": false
			}
		}],
	},
};
