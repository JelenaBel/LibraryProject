import Book from './Book';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';


const CategoryPage = (props) =>{
    const category= useParams().category_name
    console.log("category", category);
    
    let booksList= props.list.filter(n => n.category === category)
    
    let books = booksList.map((book,index) => {
		
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
export default CategoryPage;