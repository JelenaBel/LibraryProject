import {useState} from 'react';

const LoginPage = (props) => {
	
	const [state,setState] = useState({
		username:"",
		email:"",
		librarycard:"",
		password:""
	})
	const[messageLogin, setMessageLogin] = useState({
		messageLogin:"",
			})
	
	const onChange = (event) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const onSubmit = (event) => {
		event.preventDefault();
		if(state.username.length < 4 || state.password.length < 8) {
			props.setError("Username must be at least 4 characters and password 8 characters long.");
			return;
		}
		let user = {
			...state
		}
		if(event.target.name === "register") {
			props.register(user);
			
		} else {
			props.login(user);
			
			
		}
	}
	

	
	return(
		<div style={{
			backgroundColor:"white",
			width:"40%",
			margin:"auto",
			textAlign:"left"
		}}>
			
			<br></br>
			<h4>Sign in / Register</h4>
			<br></br>
			<form className="mb-5">
				<label htmlFor="username" className="form-label">Username</label>
				<input type="text"
						name="username"
						id="username"
						className="form-control"
						onChange={onChange}
						value={state.username}/>
				<label htmlFor="password" className="form-label">Password</label>
				<input type="password"
						name="password"
						id="password"
						className="form-control"
						onChange={onChange}
						value={state.password}/>
				
						<br></br>
						<br></br>
						
				<button name="register" onClick={onSubmit} style={{marginRight:5}} className="btn btn-secondary">Register</button>
				<button name="login" onClick={onSubmit} style={{marginLeft:5}} className="btn btn-secondary">Login</button>
			</form>
		</div>
		
	)
	
}

export default LoginPage;