import logo from '../img/the-three-musketeers-253.jpg'
import BookPage from './bookPage';
import { Link} from 'react-router-dom';



const Book = (props) => {
    
    return(
        <div>
			<div className = "container col-xxl-16 px-4 py-2 card d-flex flex-row">
        <div className="card w-75" style={{textAlign:"left", fontSize:"12px"}}>
    
   <img className="card-img-left"  style={{maxHeight: "200",  marginRight: "10px"}}  src={logo}></img>
  <div className="card-body">
  <div className="d-flex flex-column bd-highlight mb-3">
    <h5 className="card-title">{props.book.title}</h5>
       
    <p className="card-text">{props.book.author}. {props.book.published}, {props.book.number_pages} pages </p>    
    <p className="card-text">{props.book.short_desc}</p>
    <p className="card-text">{props.book.category}</p>
    <div className="d-flex flex-row bd-highlight">
    <Link to={`/catalog/${props.book._id}`} className="btn btn-primary" style= {{marginRight:"20px", width: "auto", fontSize:"12px"}}>Read more</Link>
    <button className="btn btn-secondary" onClick ={()=>props.orderBook(props.book._id)} style= {{marginRight:"20px", width: "auto", fontSize:"12px"}} >Order</button>
    
    </div>
    </div>
    </div>
    </div>
      
</div>

       
</div>

    )
}


export default Book;