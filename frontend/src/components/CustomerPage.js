import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';
import UserInfo from './UserInfo';

const CustomerPage = (props) =>{
 
useEffect(() => {
   
    props.getUserOrders();
    
            
}, [])


var orders= props.orders.map((order, index) =>{
    const book = props.list.find(book =>book._id ===order.book_id)
    const date= order.order_date.split("T")[0]
    const pickup_date= order.pickup_date.split("T")[0]
    const due_date= order.due_date.split("T")[0]
    return(
        <tr key={index}>  
                <td>{book.title} </td>
                <td>{date} </td>
                <td>{pickup_date} </td>
                <td>{due_date} </td>
                <td>{order.picked} </td>
                <td>{order.returned} </td>
            </tr>
          
       
    )
})

    return(
        
        <div className= "container-sm">
            
            <link href="/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            </link>
             <br></br>
            <br></br>
            
             <h3>Hi {props.user}</h3>
             <Link to={`/userinfo`} className="btn btn-primary btn-oultine" style= {{borderRadius: "8px", marginLeft:"20px", fontSize:"14px"}}> User Profile</Link>
           

            <br></br>
            <br></br>
            <br></br>

            <h2>Your orders</h2>
            <br></br>
            <br></br>
            
            <table className="table table-striped table-hover table-responsive">
                
                <tr>
                    <th scope="col">Book title</th>
                    <th scope="col">Order date</th>
                    <th scope="col">Pickip until</th>
                    <th scope="col">Due date</th>
                    <th scope="col">Picked</th>
                    <th scope="col">Returned</th>

                    </tr>
                    
                    
                    <tbody>
                {orders}
                </tbody>
            </table>
        
           
     
        
        </div>
    )
   




}
export default CustomerPage;