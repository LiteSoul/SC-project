import React, { Fragment } from 'react'
import Layout from './components/Layout'
import AddTodo from './components/AddTodo'
// import TodoList from './components/TodoList'
import './Hooks1.css'

export default () => {
	return (
		<Fragment>
			<Layout></Layout>
			<AddTodo></AddTodo>
			{/* <TodoList></TodoList> */}
		</Fragment>
	)
}