module.exports = {
	globDirectory: 'Shopping App/',
	globPatterns: [
		'**/*.{png,js,html,css}'
	],
	swDest: 'Shopping App/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};