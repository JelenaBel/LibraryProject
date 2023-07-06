import {useState,useEffect} from 'react';
import AdminSidebar from './AdminSidebar';

const AdminOrders = (props) => {
    useEffect(() => {
   
        props.getOrdersAdmin();
        
                
    }, [])

    
    const orders= props.ordersAdmin.map((order, index)=>{
        let pickup_date=""
        let due_date=""
        const order_date =order.order_date.split("T")[0]
        if (order.pickup_date){
        pickup_date =order.pickup_date.split("T")[0]
    }
    else{
        pickup_date = order.pickup_date
    }
    if (order.due_date){
         due_date =order.due_date.split("T")[0]
        
    }
    else{
        due_date = order.due_date_date
    }
       
        let order_book=props.list.find(n=> n._id===order.book_id)
        let book_title= order_book.title
        
        return(
            <tr key={index}> 
            <td>{index}</td> 
           
                <td>{order._id} </td>
                <td>{order.userid} </td>
                <td>{book_title} </td>
                <td>{order_date} </td>
                <td>{pickup_date} </td>
                <td>{due_date} </td>
                <td>{order.picked} </td>
                <td>{order.returned} </td>
               
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
            <h2>Orders</h2>
           
            <br></br>
            <div className= "container col-xxl-12 px-4 py-2">
         
            <table className="table table-striped table-bordered table-responsive" style={{textAlign:"left", width:"100%"}}>
            <tr className='table-bordered'>
            
                    <th scope="col"></th>
                    <th scope="col">Order id</th>
                    <th scope="col">User id</th>
                    
                    <th scope="col">Book id</th>
                    <th scope="col">order_date</th>
                    <th scope="col">pickup_date</th>
                    <th scope="col">due_date</th>
                    <th scope="col">picked</th>
                    <th scope="col">returned</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>


                    </tr>
                    
                    
                <tbody>
                    {orders}
                </tbody>
              
                       
            </table>
            </div>
                </div>
            </div>
            </div>
            </div>

    )

}
export default AdminOrders;