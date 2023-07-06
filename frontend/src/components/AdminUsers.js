import {useState,useEffect} from 'react';
import AdminSidebar from './AdminSidebar';

const AdminUsers = (props) => {
    useEffect(() => {
   
        props.getUsersAdmin();
        
                
    }, [])
    
    
    const users= props.usersAdmin.map((user, index)=>{
        return(
            <tr key={index}> 
            <td>{index}</td> 
                <td>{user._id} </td>
                <td>{user.username} </td>
                <td>{user.email} </td>
                <td>{user.librarycard} </td>
                <td>{user.status} </td>
                <td><button className= "btn btn-secondary" style={{fontSize:"10px"}}><i class="bi bi-stack"></i></button></td>
                <td><button className= "btn btn-primary" style={{fontSize:"10px"}}><i class="bi bi-pen-fill" ></i></button></td>
                <td><button className= "btn btn-danger" style={{fontSize:"10px"}}><i class="bi bi-trash3"></i></button></td>
            </tr>
            

        )
    }


    )
    return (
        <div>
            <link href="sidebars.css" rel="stylesheet"></link>
            <div className="d-flex">
            <div className="d-inline-flex">
            <AdminSidebar/>
            
            </div>
            <div className="d-inline-flex">
            <div className="d-flex-col">
        <div className = "container-sm"></div>
            <h2>Users</h2>
           
            <br></br>
            <div className= "container col-xxl-12 px-4 py-2">
         
            <table className="table table-striped table-bordered table-responsive" style={{textAlign:"left", width:"100%"}}>
            <tr className='table-bordered'>
                    <th scope="col"></th>
                    <th scope="col">User id</th>
                    <th scope="col">Username</th>
                    
                    <th scope="col">User e-mail</th>
                    <th scope="col">Librarycard</th>
                    <th scope="col">Status</th>
                    <th scope="col">User Orders</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>

                    </tr>
                    
                    
                <tbody>
                    {users}
                </tbody>
              
                       
            </table>
            </div>
                </div>
            </div>
            </div>
            </div>

    )

}
export default AdminUsers;