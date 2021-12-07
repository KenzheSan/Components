import React, { useRef } from 'react'

const LoginForm = () => { // 
	const textRef = useRef() //
	const passwordRef = useRef() //
	const loginHandler = async (e) => { //
        e.preventDefault() //
        let user = { //
            text: textRef.current.value,
            password: passwordRef.current.value
        }
		try {//
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
	}

	return (
		<form onSubmit={loginHandler}>
			<input ref={textRef} type='text' />
			<br />
			<input ref={passwordRef} type='password' />
			<br />
			<button type='submit'>Login</button>
		</form>
	)
}

export default LoginForm
