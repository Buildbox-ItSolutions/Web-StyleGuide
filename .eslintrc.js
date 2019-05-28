module.exports = {
	root: true,
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'eslint:recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
	],
	plugins: ['@typescript-eslint', 'react'],
	env: {
		browser: true,
		commonjs: true,
		node: true,
		mongo: true,
		es6: true,
	},
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
			createClass: 'createReactClass', // Regex for Component Factory to use,
			// default to "createReactClass"
			pragma: 'React', // Pragma to use, default to "React"
			version: 'detect', // React version. "detect" automatically picks the version you have installed.
			// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
			// default to latest and warns if missing
			// It will default to "detect" in the future
			flowVersion: '0.53', // Flow version
		},
		propWrapperFunctions: [
			// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
			'forbidExtraProps',
			{ property: 'freeze', object: 'Object' },
			{ property: 'myFavoriteWrapper' },
		],
		linkComponents: [
			// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
			'Hyperlink',
			{ name: 'Link', linkAttribute: 'to' },
		],
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
		complexity: ['warn', 20],
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
		'array-callback-return': 'warn',
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
			'warn',
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
		'comma-dangle': ['warn', 'always'],
		'computed-property-spacing': ['warn', 'always'],
		'func-call-spacing': ['error', 'never'],
		'line-comment-position': ['warn', { position: 'above' }],
		'lines-around-comment': [
			'warn',
			{ beforeBlockComment: true, beforeLineComment: true },
		],
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
	},
}
