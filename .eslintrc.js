module.exports = {
	root: true,
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'eslint:recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
		project: './tsconfig.json',
	},
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
	rules: {
		// 'prettier/prettier': 'error',

		// TSLint
		'@typescript-eslint/array-type': ['error', 'generic'],
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/interface-name-prefix': ['error', 'always'],
		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true,
			},
		],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-inferrable-types': [
			'error',
			{
				ignoreParameters: true,
				ignoreProperties: true,
			},
		],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/explicit-function-return-type': [
			'warn',
			{
				allowExpressions: true,
				allowTypedFunctionExpressions: false,
			},
		],

		// ESLint
		'no-console': ['warn'],
		indent: ['error', 'tab'],
		'max-len': [
			'warn',
			{
				code: 80,
				tabWidth: 4,
				ignoreUrls: true,
				ignoreStrings: true,
			},
		],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'max-depth': ['error', 3],
		complexity: ['error', 20],
		curly: ['error', 'multi-line', 'consistent'],
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-template-curly-in-string': 'error',
		'no-eval': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-useless-concat': 'error',
		yoda: 'error',
		'no-label-var': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-implicit-coercion': 'error',
		'no-implied-eval': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'no-cond-assign': ['error', 'always'],
		'default-case': 'error',
		'dot-location': ['error', 'property'],
		'dot-notation': 'warn',
		eqeqeq: 'error',
		'no-alert': 'error',
		'no-else-return': ['error', { allowElseIf: false }],
		'no-lonely-if': 'error',
		'no-empty-function': 'error',
		'no-new': 'error',
		'no-new-wrappers': 'error',
		'no-return-assign': ['error', 'always'],
		'no-new-func': 'error',
		'no-eq-null': 'error',
		'no-multi-spaces': 'error',
		'require-await': 'warn',
		'vars-on-top': 'error',
		'jsx-quotes': ['error', 'prefer-double'],
		'no-var': 'error',
		'prefer-const': ['error', { destructuring: 'all' }],
		'no-useless-rename': 'error',
		'template-curly-spacing': ['error', 'always'],
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': [
			'error',
			'always',
			{
				singleValue: true,
				objectsInArrays: false,
				arraysInArrays: false,
			},
		],
		'block-spacing': 'error',
		'brace-style': ['error', '1tbs'],
		camelcase: ['error'],
		'comma-dangle': ['error', 'always'],
		'computed-property-spacing': ['error', 'always'],
		'func-call-spacing': ['error', 'never'],
		'line-comment-position': ['error', { position: 'above' }],
		'lines-around-comment': [
			'error',
			{ beforeBlockComment: true, beforeLineComment: true },
		],
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
	},
}
module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'prettier',
		'prettier/@typescript-eslint',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
		project: './tsconfig.json',
	},
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
	rules: {
		// 'prettier/prettier': 'error',

		// TSLint
		'@typescript-eslint/array-type': ['error', 'generic'],
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/interface-name-prefix': ['error', 'always'],
		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true,
			},
		],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-inferrable-types': [
			'error',
			{
				ignoreParameters: true,
				ignoreProperties: true,
			},
		],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/explicit-function-return-type': [
			'warn',
			{
				allowExpressions: true,
				allowTypedFunctionExpressions: false,
			},
		],

		// ESLint
		'no-console': ['warn'],
		indent: ['error', 'tab'],
		'max-len': [
			'warn',
			{
				code: 80,
				tabWidth: 4,
				ignoreUrls: true,
				ignoreStrings: true,
			},
		],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'max-depth': ['error', 3],
		complexity: ['error', 20],
		curly: ['error', 'multi-line', 'consistent'],
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-template-curly-in-string': 'error',
		'no-eval': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-useless-concat': 'error',
		yoda: 'error',
		'no-label-var': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-implicit-coercion': 'error',
		'no-implied-eval': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'no-cond-assign': ['error', 'always'],
		'default-case': 'error',
		'dot-location': ['error', 'property'],
		'dot-notation': 'warn',
		eqeqeq: 'error',
		'no-alert': 'error',
		'no-else-return': ['error', { allowElseIf: false }],
		'no-lonely-if': 'error',
		'no-empty-function': 'error',
		'no-new': 'error',
		'no-new-wrappers': 'error',
		'no-return-assign': ['error', 'always'],
		'no-new-func': 'error',
		'no-eq-null': 'error',
		'no-multi-spaces': 'error',
		'require-await': 'warn',
		'vars-on-top': 'error',
		'jsx-quotes': ['error', 'prefer-double'],
		'no-var': 'error',
		'prefer-const': ['error', { destructuring: 'all' }],
		'no-useless-rename': 'error',
		'template-curly-spacing': ['error', 'always'],
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': [
			'error',
			'always',
			{
				singleValue: true,
				objectsInArrays: false,
				arraysInArrays: false,
			},
		],
		'block-spacing': 'error',
		'brace-style': ['error', '1tbs'],
		camelcase: ['error'],
		'comma-dangle': ['error', 'always'],
		'computed-property-spacing': ['error', 'always'],
		'func-call-spacing': ['error', 'never'],
		'line-comment-position': ['error', { position: 'above' }],
		'lines-around-comment': [
			'error',
			{ beforeBlockComment: true, beforeLineComment: true },
		],
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
	},
}
