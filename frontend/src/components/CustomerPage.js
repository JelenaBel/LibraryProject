import {useState, useEffect} from 'react';
import UserInfo from './UserInfo';

const CustomerPage = (props) =>{
 
useEffect(() => {
   
    props.getUserOrders();
    
            
}, [])

var orders= props.orders.map((order, index) =>{
    const book = props.list.find(book =>book._id ===order.book_id)
    const date= order.order_date.split("T")[0]
    return(
        <tr key={index}>  
                <td>{book.title} </td>
                <td>{date} </td>
                <td>{order.pickup_date} </td>
                <td>{order.due_date} </td>
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
            
             <UserInfo  getUser= {props.getUser}userInfo={props.userInfo}/>
           

            <br></br>
            <br></br>
            <br></br>

            <h2>Your orders</h2>
            <br></br>
            <br></br>
            
            <table className="table table-striped table-hover table-responsive">
                
                <tr>
                    <th scope="col">Book id</th>
                    <th scope="col">Order date</th>
                    <th scope="col">Pickip date</th>
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