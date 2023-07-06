import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const UserInfo = (props) =>{
    
    
    useEffect(() => {
   
        props.getUser();
        
                
    }, [])
        

    return(
        
        <div>
            
                      
             
            <h2>User info </h2>
           
            <br></br>
            <div className= "container col-xxl-6 px-4 py-2">
         
            <table className="table table-striped table-bordered table-responsive" style={{textAlign:"left", margins:"auto"}}>
                <tbody>
            <tr><td>Username</td> <td>{props.userInfo["username"]}</td></tr>
            <tr><td>Password</td> <td>********</td></tr>
            <tr><td>Email</td> <td> {props.userInfo["email"]}</td></tr>
            <tr><td>Librarycard number</td> <td>{props.userInfo["librarycard"]}</td></tr>
            <tr><td>Status</td> <td>{props.userInfo["status"]}</td></tr>
            </tbody>
                       
            </table>
            <Link to={`/edituserinfo`} className="btn btn-primary btn-oultine" style= {{borderRadius: "8px", marginLeft:"20px", fontSize:"14px"}}> Update user info</Link>
            </div>
            </div>
            

            
            )
   




}
export default UserInfo;