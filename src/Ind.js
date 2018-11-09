import React from 'react';
import PropTypes from 'prop-types';
import ButtonAppBar from './components/AppBar'
import Footer from './components/Footer'
import Stepper from './components/Stepper'
import Stepper2 from './components/Stepper2'
import Stepper3 from './components/Stepper3'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import withRoot from './withRoot';

const styles = theme => ({
	root: {
		// textAlign: 'center',
		// paddingTop: theme.spacing.unit * 2,
	}
});

class Index extends React.Component {
	state = {
		show: false
	}

	showMyComponent = () => {
		this.setState({ show: true })
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<ButtonAppBar />
				<Button color="secondary" onClick={this.showMyComponent}>1</Button>
				<Stepper />
				<Stepper2 style={{ display: 'none' }} />
				<Stepper3 style={this.state.show ? {} : { display: 'none' }} />
				<Footer />
			</div>
		);
	}
}

Index.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));