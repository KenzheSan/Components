import React, { useState } from "react"
import LoginForm from "./components/LoginForm"

function App() {
	const [loading,setIsLoading] = useState(false)
	const usersChangeHandler = async (user) =>{
		setIsLoading(true)
		try {
			const response = await fetch(
				'https://react-http-test-a5917-default-rtdb.firebaseio.com/users.json',
				{
					method: 'POST',
					body: JSON.stringify(user),
					headers: {
						'Content-type': 'application/json',
					},
				},
			)
			if (!response.ok) {
				throw new Error(
					`Failed to login something wrong ${response.status}`,
				)
			}
			const data = await response.json()
	        console.log(data);
		} catch (error) {
			console.log(error) //
		}
		setIsLoading(false)
	}


	return <div>
		{!loading && <LoginForm onTransition={usersChangeHandler}/>}
		{loading && <p>Sending to data-base</p>}
	</div>
}

export default App
