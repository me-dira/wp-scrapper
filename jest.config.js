const aliases = require('module-alias-jest/register');

module.exports = {
	testRegex: '(test.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	moduleNameMapper: aliases.jest,

	transform: {
		'^.+\\.(t|j)sx?$': 'ts-jest',
	},
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
		'jsx',
		'json',
		'node',
	],
};
