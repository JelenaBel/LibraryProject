import {useState} from 'react';

const AddBookForm = (props) => {
	
	const [state,setState] = useState({

		title:'',
    	author: '',
    	published: 0,
    	number_pages: 0,
    	language: '',
    	short_desc: '', 
		full_description:'',
    	category: '',
		library_code: '',
		
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
		let book = {
			...state
		}
		props.addBook(book);
		setState({
			title:'',
			author: '',
			published: 0,
			number_pages: 0,
			language: '',
			short_desc: '', 
			full_description:'',
			category: '',
			library_code: '',
		})
	}
	
	return(
		<div style={{
			"margin":"auto",
			"width":"100%",
			"textAlign":"center"
		}}>
			<div className = "container col-xxl-8 px-4 py-5">
				<br></br>
				<h2>Add New Book</h2>
				<br></br>
				<br></br>
			<form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={onSubmit}>
				<label htmlFor="title" className="form-label">Book title:</label>
				<input type="text"
						className="form-control"
						name="title"
						id="title"
						onChange={onChange}
						value={state.title}/>
				
				<label htmlFor="author" className="form-label">Book author:</label>
				<input type="text"
						className="form-control"
						name="author"
						id="author"
						onChange={onChange}
						value={state.author}/>

				<label htmlFor="published" className="form-label">Year published:</label>
				<input type="number"
						className="form-control"
						name="published"
						id="published"
						onChange={onChange}
						value={state.published}/>


				<label htmlFor="number_pages" className="form-label">Number of pages:</label>
				<input type="number"
						className="form-control"
						name="number_pages"
						id="number_pages"
						onChange={onChange}
						value={state.number_pages}/>

				<label htmlFor="language" className="form-label">Language:</label>
				<input type="text"
						className="form-control"
						name="language"
						id="language"
						onChange={onChange}
						value={state.language}/>


				<label htmlFor="short_desc" className="form-label">Short description:</label>
				<input type="text"
						className="form-control"
						name="short_desc"
						id="short_desc"
						onChange={onChange}
						value={state.short_desc}/>
 
 				<label htmlFor="full_description" className="form-label">Full description:</label>
				<input type="textarea"
						className="form-control"
						name="full_description"
						id="full_description"
						onChange={onChange}
						value={state.full_description}/>

				<label htmlFor="category" className="form-label">Category:</label>
				<input type="text"
						className="form-control"
						name="category"
						id="category"
						onChange={onChange}
						value={state.category}/>

				<label htmlFor="library_code" className="form-label">Library_code:</label>
				<input type="text"
						className="form-control"
						name="library_code"
						id="library_code"
						onChange={onChange}
						value={state.library_code}/>

				<br></br>
				<input type="submit" className="btn btn-primary" value="Add"/>
			</form>
			</div>
		</div>
	)
}

export default AddBookForm;