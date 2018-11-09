import React from 'react';
// import Stepper, { Step, StepLabel } from 'material-ui/Stepper'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import MaterialUIForm from 'material-ui-form'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function getSteps() {
	return [
		'Step 1',
		'Step 2',
	]
}

class MyForm extends React.Component {
	state = {
		activeStep: 0,
		errorSteps: [],
	}

	clickNext = () => {
		this.setState({
			activeStep: this.state.activeStep + 1,
		})
	}

	clickBack = () => {
		this.setState({
			activeStep: this.state.activeStep - 1,
		})
	}

	submit = (values, pristineValues) => {
		// get all values and pristineValues on form submission
	}

	updateErrorSteps = (field, errorSteps) => {
		this.setState({ errorSteps })
	}

	render() {
		const steps = getSteps()
		const { activeStep, errorSteps } = this.state

		return (
			<div>
				<Stepper activeStep={activeStep} alternativeLabel>
					{steps.map((label, i) => (
						<Step key={label}>
							<StepLabel error={errorSteps.includes(i)}>
								{label}
							</StepLabel>
						</Step>
					))}
				</Stepper>

				<MaterialUIForm
					activeStep={activeStep}
					onFieldValidation={this.updateErrorSteps}
					onSubmit={this.submit}
				>
					{activeStep === 0 &&
						<React.Fragment>
							<TextField
								label="Name"
								name="name"
								value=""
								required
							/>
							<Button variant="contained" onClick={this.clickNext}>Next</Button>
						</React.Fragment>
					}

					{activeStep === 1 &&
						<React.Fragment>
							<TextField
								label="Address"
								name="address"
								value=""
								required
							/>
							<Button variant="raised" onClick={this.clickBack}>Back</Button>
							<Button variant="raised" type="submit">Submit</Button>
						</React.Fragment>
					}
				</MaterialUIForm>
			</div>
		)
	}
}

export default MyForm