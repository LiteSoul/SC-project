import React from 'react'

export default ({ items }) => {

	return (
		<div className='section'>
			<div className='container'>
				{items.map((item, i) => {
					return (
						<div className='row' onClick={console.log('click')}>
							<div className="col-sm-9" key={i}>{item}</div>
							<div className="col-sm-2">Done</div>
							<div className="col-sm-1">X</div>
						</div>
					)
				})}
			</div >
		</div>
	)
}