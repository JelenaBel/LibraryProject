import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const EditUserInfo =(props) => {
    const [state,setState] = useState({
		"username":props.userInfo.username,
		"password":props.userInfo.password,
		"email":props.userInfo.email,
        "librarycard":props.userInfo.librarycard,
        "status": props.userInfo.status
	})

	const onChange = (event) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	const onSubmit= (event) =>{
        event.preventDefault();
        if(state.username.length < 4 || state.password.length < 8) {
			props.setError("Username must be at least 4 characters and password 8 characters long.");
			return;
		}
	
		let user = {
			...state,
			_id:props.userInfo._id,
            status:props.userInfo.status
		}
		props.editUser(user);
        
	}

	return(
        <div style={{
			"margin":"auto",
			"width":"100%",
			"textAlign":"center"
		}}>
			<div className = "container col-xxl-4 px-4 py-5">
				
				<h2>Update your info</h2>
				<br></br>
				
		<form className="p-4 p-md-5 border rounded-3 bg-light">
            <label htmlFor="username" className="form-label">Username:</label>
            <input type="text"
						name="username"
						id="username"
						className="form-control"
						onChange={onChange}
						value={state.username}/>
            <label htmlFor="password" className="form-label">Password:</label>
			<input type="password"
						name="password"
						id="password"
						className="form-control"
						onChange={onChange}
						value={state.password}/>
            <label htmlFor="email" className="form-label">Email:</label>
			<input type="email"
						name="email"
						id="email"
						className="form-control"
						onChange={onChange}
						step="0.01"
						value={state.email}/>
            <label htmlFor="librarycard" className="form-label">Librarycard:</label>
            <input type="librarycard"
						name="librarycard"
						id="librarycard"
						className="form-control"
						onChange={onChange}
						step="0.01"
						value={state.librarycard}/>

                        <br></br>
			<button className="btn btn-primary btn-oultine" type ="submit" style= {{borderRadius: "8px", marginLeft:"20px", fontSize:"14px"}}	onClick={onSubmit}>Save</button>
			<Link to={`/userinfo`} className="btn btn-danger btn-oultine" style= {{borderRadius: "8px", marginLeft:"20px", fontSize:"14px"}}> Cancel</Link>
            </form>
            </div>
            </div>
	)
}


export default EditUserInfo;