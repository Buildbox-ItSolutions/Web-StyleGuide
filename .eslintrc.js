module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			tsx: true
		}
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended'
	],
	rules: {
		// REACT
		'react/prop-types': ['off'],

		// JAVASCRIPT
		'no-console': ['warn'],
		indent: ['error', 'tab'],
		'max-len': [
			'warn',
			{
				code: 80,
				tabWidth: 4,
				ignoreUrls: true,
				ignoreStrings: true
			}
		],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'max-depth': ['error', 3],
		// complexity: ['warn', 20],
		curly: ['error', 'multi-line', 'consistent'],
		'no-await-in-loop': 'error',
		yoda: 'error',
		'no-var': 'error',
		camelcase: ['error'],
		'comma-dangle': [
			'warn',
			{
				arrays: 'never',
				objects: 'never',
				imports: 'never',
				exports: 'never',
				functions: 'never'
			}
		],

		// TYPESCRIPT
		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/interface-name-prefix': ['error', 'always'],
		'@typescript-eslint/explicit-function-return-type': [
			'warn',
			{
				allowExpressions: true
			}
		],
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/array-type': ['error', 'generic'],
		'@typescript-eslint/no-use-before-define': 'off'
	}
}
