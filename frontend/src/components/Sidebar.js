const Sidebar = () =>{
    return (
        <div>
            <div className="d-flex flex-column flex p-4" style={{ fontSize:"14px", textAlign: "left", backgroundColor:"white"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    Categories
    </a>
    
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="/" className="nav-link link-dark" >
          Study books
        </a>
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