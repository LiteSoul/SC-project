import React from 'react';
import PropTypes from 'prop-types';
import ButtonAppBar from './components/AppBar'
import Footer from './components/Footer'
import Stepper from './components/Stepper'
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

const styles = theme => ({
	root: {
		// textAlign: 'center',
		// paddingTop: theme.spacing.unit * 2,
	}
});

class Index extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<ButtonAppBar />
				<Stepper />
				<Footer />
			</div>
		);
	}
}

Index.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));