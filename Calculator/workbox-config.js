module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{download,svg,css,png,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};