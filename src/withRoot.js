import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
	palette: {
		primary: {
			// light: purple[300],
			light: '#4383cc',
			// main: purple[500],
			main: '#1565c0',
			// dark: purple[700],
			dark: '#0e4686',
		},
		secondary: {
			light: '#5393ff',
			main: '#2979ff',
			dark: '#1c54b2',
		},
	},
	typography: {
		useNextVariants: true,
	},
});

function withRoot(Component) {
	function WithRoot(props) {
		// MuiThemeProvider makes the theme available down the React tree
		// thanks to React context.
		return (
			<MuiThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...props} />
			</MuiThemeProvider>
		);
	}

	return WithRoot;
}

export default withRoot;