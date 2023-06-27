import logo from '../img/the-three-musketeers-253.jpg';
import { useParams } from 'react-router-dom';


const BookPage = (props) =>{
    const id = useParams().id
    console.log("id", id);
    const book = props.list.find(n => n._id === id) 
    
    
        return(
            <div>
			<div className = "container col-xxl-16 px-4 py-2">
        <div className="card w-75" style={{textAlign:"left", fontSize:"12px"}}>
        
 
  <div className="d-flex flex-row bd-highlight">
  <img className="card-img-left" style={{maxHeight: "200px", marginRight: "10px"}}  src={logo}></img>
  <div className="card-body">
  <div className="d-flex flex-column bd-highlight mb-3">
    <h5 className="card-title">{book.title}</h5>
       
    <p className="card-text">{book.author}. {book.published}, {book.number_pages} pages </p>    
    <p className="card-text">{book.short_desc}</p>
    <p className="card-text">{book.full_description}</p>
    <p className="card-text">{book.category}</p>
    <p className="card-text">{book.library_code}</p>
    <div className="d-flex flex-row bd-highlight">
    
    </div>
    </div>
    </div>
    </div>
      
</div>

       
</div>
</div>
        )
    

}


export default BookPage;