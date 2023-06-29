import logo from '../img/the-three-musketeers-253.jpg';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Link} from 'react-router-dom';


const BookPage = (props) =>{
    const id = useParams().id
    console.log("id", id);
    const book = props.list.find(n => n._id === id) 
    
    
        return(
            <div>
                <div className = "container">
            
            <div className="d-flex">
                <div className="d-inline-flex">
    
                <Sidebar></Sidebar>
                </div>
                <div className="d-inline-flex">
                <div className="d-flex flex-column">  
                <br></br>
                <br></br>
			<div className = "container col-xxl-12 px-4 py-2" style = {{textAlign: 'left'}}>
        
        
 
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
    <Link to={`/catalog/wishlist/${book._id}`} className="btn btn-secondary"style= {{marginRight:"20px", fontSize:"12px"}} >Wishlist</Link>
    <Link to={`/catalog/reserve/${book._id}`} className="btn btn-secondary"style= {{marginRight:"20px", fontSize:"12px"}} >Reserve</Link>
    
    
    </div>
    </div>
    </div>
      
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