import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#0BA5EC',
			dark: '#282c34',
			light: '#f5f6f7',
			contrastText: '#1D2939',
		},
		background: {
			default: '#fff',
			paper:
				'linear-gradient(90deg, rgba(11,165,236,1) 50%, rgba(16,24,40,1) 100%)',
		},
	},
	typography: {
		fontFamily: ['Inter', '"Helvetica Neue"', 'sans-serif'].join(','),
	},
	breakpoints: {
		keys: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
		values: {
			xxs: 0,
			xs: 414, // iPhone X and below in portrait mode
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});


export default theme;
