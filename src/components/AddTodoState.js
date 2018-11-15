import {useState} from 'react'

export const useInputValue = () => {
	const [inputValue, setInputValue] = useState()

	return {
		onInputChange: (e) => {
			setInputValue(e.target.value)
		},
		onInputKeyPress: (e) => {
			if(e.keyCode === 13||e.which===13) console.log(inputValue)
		},
		onButtonClick: () => {
			console.log(inputValue)
		}
	}

	// const onInputChange = (e) => {
	// 	setInputValue(e.target.value)
	// }

	// const onInputKeyPress = (e) => {
	// 	if(e.keyCode === 13||e.which===13) console.log(inputValue)
	// }

	// const onButtonClick = () => {
	// 	console.log(inputValue)
	// }

}