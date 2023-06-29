import './App.css';
import {useState,useEffect} from 'react';
import AddBookForm from './components/addBookForm';
import {Routes,Route,Navigate} from 'react-router-dom';
import MainPage from './components/mainPage';
import NavbarResponsive from './components/Navbar';
import FooterResponsive from './components/footer';
import Catalog from './components/Catalog';
import BookPage from './components/bookPage';
import CategoryPage from './components/CategoryPage';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/logoutPage';




function App() {
	
	const [state,setState] = useState({
		list:[],
		isLogged:false,
		token:"",
		loading:false,
		error:"",
		user:""
	})
	
	const [urlRequest,setUrlRequest] = useState({
		url:"",
		request:{},
		action:""
	})
	
	//HELPER FUNCTION
	
	useEffect(() => {
		if(sessionStorage.getItem("state")) {
			let state = JSON.parse(sessionStorage.getItem("state"));
			setState(state);
			if(state.isLogged) {
				getBooks(state.token);
			}
		}
	},[])
	
	const saveToStorage = (state) => {
		sessionStorage.setItem("state",JSON.stringify(state));
	}
	
	const setLoading = (loading) => {
		setState((state) => {
			return {
				...state,
				loading:loading,
				error:""
			}
		})
	}

	
	
	const setError = (error) => {
		setState((state) => {
			let tempState = {
				...state,
				error:error
			}
			saveToStorage(tempState);
			return tempState;
		})
	}
	
	const clearState = (error) => {
		let changedState = {
			list:[],
			isLogged:false,
			loading:true,
			token:"",
			error:error,
			user:""
		}
		saveToStorage(changedState);
		setState(changedState);
	}


	
	//HELPER FUNCTION

		
	useEffect(() => {
		
				getBooks();
							
		}, [])

		
	
	//USEEFFECT
	
	useEffect(() => {

		//const fetchData = async () => {
			
					
		const fetchData = async () => {
			if(!urlRequest.url) {
				return;
			}
			setLoading(true);
			const response = await fetch(urlRequest.url,urlRequest.request);

			if(!response) {
				clearState("Server never responded. Logging you out. Try again later.");
				return;
			}

			if(response.ok) {
				switch(urlRequest.action) {
					case "getbooks":
						const data = await response.json();
						if(!data) {
							setError("Failed to parse shopping information. Try again later.");
							return;
						}
						setState((state) => {
							let tempState = {
								...state,
								list:data
							}
							saveToStorage(tempState);
							return tempState;
						})
						return;
					case "addbook":
						getBooks();
						return;
					case "register":
						setError("Register success");
						return;
					case "login":
						const loginData = await response.json();
						if(!loginData) {
							setError("Failed to parse login information. Try again later.");
							return;
						}
						setState((state) => {
							let tempState = {
								...state,
								isLogged:true,
								token:loginData.token
							
							}
							saveToStorage(tempState);
							return tempState;
						})
						getBooks(loginData.token);
						return;
					case "logout":
						console.log("Case Logout")
						clearState("You are logged out");
						
						return;
					default:
						return;
				}

					
					
			} else {
				
				if(response.status === 403) {
					clearState("Your session has expired. Logging you out.");
					return;
				}
				let errorMessage = " Server responded with a status "+response.status+" "+response.statusText
				switch(urlRequest.action) {
					case "register":
						if(response.status === 409) {
							setError("Username already in use");
							return;
						} else {
							setError("Register failed."+errorMessage);
							return;
						}
					case "login":
						setError("Login failed."+errorMessage);
						return;
					case "getbooks":
						setError("Failed to fetch shopping information."+errorMessage);
						return;
					case "addbook":
						setError("Failed to add new item."+errorMessage);
						return;
					case "logout":
						clearState("Server responded with an error. Logging you out.");
						return;
					default:
						return;
						
				}
			}
		}
		
		fetchData();
	},[urlRequest]);
	
	//REST API
	
	const getBooks = () => {
		
		setUrlRequest({
			url:"/api/catalog",
			request:{
				"method":"GET",
				"headers":{
					
				}
			},
			action:"getbooks"			
		})
	}

		
	
	const addBook = (book) => {
		setUrlRequest({
			url:"/api_admin/books/add",
			request:{
				"method":"POST",
				"headers":{
					"Content-Type":"application/json",
					"token":state.token
				},
				"body":JSON.stringify(book)
			},
			action:"addbook"
		})
	}

	//LOGIN API
	
	const register = (user) => {
		setUrlRequest({
			url:"/register",
			request:{
				method:"POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(user)
			},
			action:"register"
		})
	}
	
	const login = (user) => {
		setUrlRequest({
			url:"/login",
			request:{
				method:"POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(user)
			},
			action:"login"
		})
		setState((state) => {
			return {
				...state,
				user:user.username
			}
		})
	}
	
	const logout = () => {
		console.log("statetoken",state.token)
		setUrlRequest({
			url:"/logout",
			request:{
				method:"POST",
				headers:{
					"token":state.token
				}
			},
			action:"logout"
		})
	}
	let message =<h4></h4>

	if(state.error) {
		message = <h4>{state.error}</h4>
	}
	
	
	
	
	if(state.isLogged) {
	return (
		<div className="App">
			<NavbarResponsive logout={logout} isLogged={state.isLogged} user={state.user}/>
			<div style={{height:25, textAlign:"center"}}>
					{message}
				</div>
			<Routes>
			    <Route path="/" element={<MainPage/>}/>			
				<Route path="/catalog" element={<Catalog list= {state.list}/>}/>
				<Route path="/login" element={<LoginPage  register={register} login={login} list= {state.list}/>}/>
				
				<Route path="/catalog/:id" element={<BookPage list= {state.list}/>}/>
				<Route path="/catalog/category/:category_name" element={<CategoryPage list= {state.list}/>}/>
				<Route path="/books/add" element={<AddBookForm addBook={addBook} />}/>
				
			</Routes>
			<FooterResponsive/>
		</div>
	);
} else{
	return (
		<div className="App">
			<NavbarResponsive logout={logout} isLogged={state.isLogged} user={state.user}/>
			<div style={{height:25, textAlign:"center"}}>
					{message}
				</div>
			<Routes>
			    <Route path="/" element={<MainPage/>}/>			
				<Route path="/catalog" element={<Catalog list= {state.list}/>}/>
				<Route path="/login" element={<LoginPage  register={register} login={login} list= {state.list}/>}/>
				
				<Route path="/catalog/:id" element={<BookPage list= {state.list}/>}/>
				<Route path="/catalog/category/:category_name" element={<CategoryPage list= {state.list}/>}/>
				
				
			</Routes>
			<FooterResponsive/>
		</div>
	);

}
}


export default App;