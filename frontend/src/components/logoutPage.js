import {useState} from 'react';

const LogoutPage = (props) => {
	const newState = props.logout
	if (props.isLogged==="false"){
		return(
			<div style={{
				backgroundColor:"white",
				width:"40%",
				margin:"auto",
				textAlign:"left"
			}}>
				<br></br>
				<h4>You are succesfully logout!</h4>
				<br></br>
				
			</div>
			
		)

	}else{
	
	
	
	return(
		<div style={{
			backgroundColor:"white",
			width:"40%",
			margin:"auto",
			textAlign:"left"
		}}>
			<br></br>
			<h4>Logout failed</h4>
			<br></br>
			
		</div>
		
	)
	}
}

export default LogoutPage;