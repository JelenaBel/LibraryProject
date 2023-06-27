import './App.css';
import {useState,useEffect} from 'react';
import AddBookForm from './components/addBookForm';
import {Routes,Route,Navigate} from 'react-router-dom';
import MainPage from './components/mainPage';
import NavbarResponsive from './components/Navbar';
import FooterResponsive from './components/footer';
import Catalog from './components/Catalog';
import BookPage from './components/bookPage';




function App() {
	
	const [state,setState] = useState({
		list:[],
		error: '',
		
		
	})
	
	
	const [urlRequest,setUrlRequest] = useState({
		url:"",
		request:{},
		action:""
	})


	
	//HELPER FUNCTION

		
	useEffect(() => {
		
				getBooks();
							
		}, [])

		
	
	const clearState= (error) =>
	setState({
		list: [],
		error:error
	})

	
	
	//USEEFFECT
	
	useEffect(() => {
		
		const fetchData = async () => {
			if(!urlRequest.url) {
				return;
			}
			
			const response = await fetch(urlRequest.url,urlRequest.request);

			if(!response) {
				console.log("Server never responded. Logging you out. Try again later.");
				return;
			}

			if(response.ok) {
				switch(urlRequest.action) {
					case "getbooks":
						const data = await response.json();
						if(!data) {
							return;
						}
						setState({
							list:data
						})
						return;
										
					case "addbook":
						getBooks();
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
			url:"/api/books/add",
			request:{
				"method":"POST",
				"headers":{
					"Content-Type":"application/json"
				},
				"body":JSON.stringify(book)
			},
			action:"addbook"
		})
	}
	
	
	
	
	
	return (
		<div className="App">
			<NavbarResponsive />
			<Routes>
			    <Route path="/" element={<MainPage/>}/>			
				<Route path="/catalog" element={<Catalog list= {state.list}/>}/>
				<Route path="/catalog/:id" element={<BookPage list= {state.list}/>}/>
				<Route path="/books/add" element={<AddBookForm addBook={addBook} />}/>
				
			</Routes>
			<FooterResponsive/>
		</div>
	);
}

export default App;