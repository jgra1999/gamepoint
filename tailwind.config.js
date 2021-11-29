module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#181818',
				secondary: '#FFF40E',
				twitch: '#9147FF',
				border: '#2e2e2e',
			},
			height: {
				header: '750px',
				mosaic: '800px',
				banner: '550px',
				slideMobile: '650px',
				mosaicMobile: '500px',
				mosaicTablets: '600px',
				mosaicPc: '1200px',
			},
			width: {
				container: '90%',
			},
			spacing: {
				96.5: '24.5rem',
			},
			inset: {
				'4/5': '80%',
				description: '30%',
				'2/5': '40%',
			},
			scale: {
				110: '1.1',
			},
			backgroundImage: {
				cod: "url('/img/slider/elden ring.jpg')",
			},
		},
	},
	variants: {
		extend: {
			inset: ['hover, group-hover'],
			borderWidth: ['hover, group-hover'],
			scale: ['hover', 'group-hover'],
			textColor: ['active'],
		},
	},
	plugins: [],
};
