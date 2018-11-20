import React, { Fragment, useState } from 'react'
import ToDoItem from './ToDoItem'

export default () => {
	const [inputValue, setInputValue] = useState('')
	const [itemsList, setItemsList] = useState([1, 2])

	const onInputChange = (e) => {
		setInputValue(e.target.value)
		console.log(e.target.value)
	}

	const onInputKeyPress = (e) => {
		if (e.keyCode === 13 || e.which === 13) {
			setItemsList([...itemsList, e.target.value])
			console.log(inputValue)
			e.target.value = ''
		}
	}

	const onButtonClick = () => {
		const e = document.getElementById('todoInput')
		setItemsList([...itemsList, e.value])
		console.log(inputValue)
		e.value = ''

	}

	return (
		<Fragment>
			<div className="card fluid">
				<div className="section">
					<h3>Add a ToDo:</h3>
				</div>
				<div className="section">
					<input
						type="text"
						placeholder="A thing to do..."
						id='todoInput'
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
				<ToDoItem items={itemsList} />
			</div >
		</Fragment>
	)
}