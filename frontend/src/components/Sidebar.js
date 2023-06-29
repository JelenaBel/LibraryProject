import { Link} from 'react-router-dom';

const Sidebar = () =>{
  const category_name="Classic novels"
    return (
        <div>
            <div className="d-flex flex-column flex p-4" style={{ fontSize:"14px", textAlign: "left", backgroundColor:"white"}}>
    <Link to={`/catalog`} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    Categories
    </Link>
  
    
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
      <Link to={`/catalog/category/${category_name}`} className="nav-link link-dark">
    Classic novels
    </Link>
      </li>
      <li>
        <a href="/" className="nav-link link-dark">
          Novels
            </a>
      </li>
      <li>
        <a href="/" className="nav-link link-dark">
         
          Drama
        </a>
      </li>
      <li>
        <a href="/" className="nav-link link-dark">
         
          Science fiction
        </a>
      </li>
      <li>
        <a href="/" className="nav-link link-dark">
                   Documentary
        </a>
      </li>
    </ul>
    
        </div>
        </div>
    )


}
export default Sidebar;