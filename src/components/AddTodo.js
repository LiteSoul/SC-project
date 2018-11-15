import React, { Fragment, useState } from 'react'
import ToDoItem from './ToDoItem'

export default () => {
	const [inputValue, setInputValue] = useState()

	const onInputChange = (e) => {
		setInputValue(e.target.value)
		console.log(e.target.value)
	}

	const onInputKeyPress = (e) => {
		if (e.keyCode === 13 || e.which === 13) console.log(inputValue)
	}

	const onButtonClick = () => {
		console.log(inputValue)
	}

	const item = <ToDoItem inputValue={inputValue} />

	return (
		<Fragment>
			<div className="card fluid">
				<div className="section">
					<h3>Add a ToDo:</h3>
				</div>
				<div className="section">
					<input
						type="text"
						placeholder="Brush your teeth"
						onChange={onInputChange}
						onKeyPress={onInputKeyPress}
					/>
					<button
						onClick={onButtonClick}
					>Add</button>
				</div>
			</div >
			<div className="card fluid">
				<div className="section">
					<h3>ToDo List:</h3>
				</div>
				{/* <ToDoItem inputValue={inputValue} /> */}
				{item}
			</div >
		</Fragment>
	)
}