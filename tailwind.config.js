module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#181818',
				secondary: '#FFF40E',
				twitch: '#9147FF',
				wario: '#f057c3',
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
				mosaicConsole: '1100px',
			},
			width: {
				container: '90%',
			},
			spacing: {
				96.5: '24.5rem',
				100: '26rem',
				102: '28rem',
				104: '30rem',
				110: '40rem',
				imgResponsive: '57%',
			},
			inset: {
				'4/5': '80%',
				description: '30%',
				'2/5': '40%',
				arrows: '55%',
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
			display: ['group-hover'],
			opacity: ['group-hover'],
			translate: ['group-hover'],
			textColor: ['active'],
		},
	},
	plugins: [],
};
