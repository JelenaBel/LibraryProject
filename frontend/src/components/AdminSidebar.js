const AdminSidebar = (props) =>{
    return(
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "220px", textAlign: "left"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <span class="fs-4">Admin panel</span>
    </a>
    <hr></hr>
    
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/adminpage" class="nav-link text-white" >
        <i class="bi bi-speedometer2"></i>   Dashboard
        </a>
      </li>
      <li class="nav-item">
        <a href="/admin/books" class="nav-link text-white" >
        <i class="bi bi-book"></i>   Books
        </a>
      </li>
      <li>
        <a href="/admin/users" class="nav-link text-white">
        <i class="bi bi-people"></i>   Users
        </a>
      </li>
      <li>
        <a href="/admin/orders" class="nav-link text-white">
        <i class="bi bi-table"></i>   Orders
        </a>
      </li>
      <hr></hr>
      <li>
        <a href="/admin/dueorders" class="nav-link text-white">
          Due orders
        </a>
      </li>
      <li>
        <a href="/admin/penalties" class="nav-link text-white">
        Penalties
        </a>
      </li>
    </ul>
    <hr></hr>
    
 
  </div>
  </div>
    )


}
export default AdminSidebar;