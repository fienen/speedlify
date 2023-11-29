module.exports = {
	name: "Aquent Sites", // optional, falls back to object key
	description: "Aquent's main websites",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://aquent.com",
		"https://aquent.co.uk",
		"https://aquent.com.au",
		"https://aquent.nl",
		"https://aquent.fr",
		"https://aquent.de",
		"https://aquent.co.jp",
		"https://aquenttalent.com"
	]
};
