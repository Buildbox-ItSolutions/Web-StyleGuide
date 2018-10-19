module.exports = {
	root: true,
	extends: ['eslint:recommended'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		commonjs: true,
		node: true,
		mongo: true
	},
	rules: {
		'no-console': ['warn'],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		'no-cond-assign': ['error', 'always'],
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		curly: ['error', 'multi'],
		'default-case': 'error',
		'dot-location': ['error', 'property'],
		'dot-notation': 'warn',
		eqeqeq: 'error',
		'no-alert': 'error',
		'no-else-return': ['error', { allowElseIf: false }],
		'no-empty-function': 'error',
		'no-eq-null': 'error',
		'no-multi-spaces': 'error',
		'no-new': 'error',
		'require-await': 'warn',
		'vars-on-top': 'error',
		'jsx-quotes': ['error', 'prefer-single'],
		'max-depth': ['error', 3],
		'no-var': 'error',
		'prefer-const': ['error', { destructuring: 'all' }],
		'no-useless-rename': 'error',
		'template-curly-spacing': ['error', 'always']
	},
	globals: {},
	plugins: []
}
