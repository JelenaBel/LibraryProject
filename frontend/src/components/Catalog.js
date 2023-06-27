import Book from './Book';
import Sidebar from './Sidebar';


const Catalog = (props) =>{
    
    let books = props.list.map((book,index) => {
		
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
export default Catalog;