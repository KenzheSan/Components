import React, { useRef, useState } from 'react'

const LoginForm = (props) => {
	const [valid,setValid] = useState(false)
	const textRef = useRef() //
	const passwordRef = useRef() //

	const validChangeHandler = () =>{
		if(textRef.current.value.trim().length > 0 || passwordRef.current.value.trim().length > 0){
			setValid(false)
		}
	}

	const loginHandler = (e) => {
		e.preventDefault()
		if(textRef.current.value.trim().length === 0 || passwordRef.current.value.trim().length === 0){
			setValid(true)
			return
		} 
		let user = {
			text: textRef.current.value,
			password: passwordRef.current.value,
		}

		props.onTransition(user)
	}


	return (
		<form onSubmit={loginHandler}>
			<input ref={textRef} type='text' onBlur={validChangeHandler}/>
			<br />
			<input ref={passwordRef} type='password' onBlur={validChangeHandler}/>
			<br />
			<button disabled={valid} type='submit'>Login</button>
		</form>
	)
}

export default LoginForm
