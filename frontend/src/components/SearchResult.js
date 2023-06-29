import Book from './Book';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';


const SearchResult = (props) =>{
    const searched = useParams().searched
    console.log("searched", searched);
    const newsearched= searched.trim().toLowerCase();
    console.log("Newsearched", newsearched);
    let bookssearched= props.list.filter(book => (book.title.toLowerCase().includes(newsearched) 
    || book.author.toLowerCase().includes(newsearched)
    || book.short_desc.toLowerCase().includes(newsearched)
    || book.full_description.toLowerCase().includes(newsearched)
    || book.category.toLowerCase().includes(newsearched)) )
    
    
    let books = bookssearched.map((book,index) => {
		
		return(
            <div>
			<Book key={book._id} book={book} index={index}/>
            
            </div>

		)
	})

    return(
        <div className = "container">
        <div className="d-flex">
            <div className="d-inline-flex">

            <Sidebar></Sidebar>
            </div>
            <div className="d-inline-flex">
            <div className="d-flex flex-column">  
            
			{books}
            </div>
            </div>
		 

        </div>
        </div>

    )
}
export default SearchResult;