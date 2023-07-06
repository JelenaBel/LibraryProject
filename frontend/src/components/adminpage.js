import {Link} from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminPage=(props)=> {

    const numberBooks= props.list.length
    const password= "$2b$14$BWeGYusFGWeCzBMHr.ZM6OXKC6kY9GYb8esmFgK4JWX.3R4AO46Jm"
    console.log ("password length", password.length ) 
    
    return(
        <div>
            <link href="sidebars.css" rel="stylesheet"></link>
            <div className="d-flex">
            <div className="d-inline-flex">
            <AdminSidebar/>
            
            </div>
            <div className="d-inline-flex">
             
        <div className = "container-sm">
            <h2>Admin part</h2>
            <p>Books in Library {numberBooks}</p>
            <br></br>
            <Link to={`/books/add`} className="btn btn-primary btn-oultine" style= {{borderRadius: "8px", marginLeft:"20px", fontSize:"14px"}}>Add Book</Link>
            <br></br>
            <br></br>
            <br></br>
            </div>
            </div>
            </div>
        
        </div>

    )

}
export default AdminPage;