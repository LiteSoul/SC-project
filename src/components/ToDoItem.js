import React from 'react'

export default ({ items }) => {

	return (
		<div>
			{items.map((item, i) => <div className="section" key={i}>{item}</div>)}
		</div>
		// <div className="section">{props.inputValue}</div>
	)
}