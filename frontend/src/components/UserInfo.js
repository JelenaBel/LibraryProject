import {useState, useEffect} from 'react';

const UserInfo = (props) =>{
        

    return(
        
        <div>
            
                      
             
            <h2>User info </h2>
           
            <br></br>
            <div className= "container col-xxl-6 px-4 py-2">
         
            <table className="table table-striped table-bordered table-responsive" style={{textAlign:"left", margins:"auto"}}>
                <tbody>
            <tr><td>Your username</td> <td>{props.userInfo.username}</td></tr>
            <tr><td>Your password</td> <td>*********</td></tr>
            <tr><td>Your email</td> <td> {props.userInfo.email}</td></tr>
            <tr><td>Your librarycard number</td> <td>{props.userInfo.librarycard}</td></tr>
            </tbody>
           
            </table>
            </div>
            </div>
            

            
            )
   




}
export default UserInfo;