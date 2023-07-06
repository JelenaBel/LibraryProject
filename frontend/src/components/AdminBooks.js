import {useState,useEffect} from 'react';
import AdminSidebar from './AdminSidebar';

const AdminBooks = (props) => {

    useEffect(() => {
   
        props.getBooks();
        
                
    }, [])
    const books= props.list.map((book, index)=>{
        return(
            <tr key={index}> 
            <td>{index}</td> 
                <td>{book._id} </td>
                <td>{book.title} </td>
                <td>{book.category} </td>
                <td>{book.author} </td>
                <td>{book.published} </td>
                <td>{book.language} </td>
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
            <h2>Books</h2>
           
            <br></br>
            <div className= "container col-xxl-12 px-4 py-2">
         
            <table className="table table-striped table-bordered table-responsive" style={{textAlign:"left", width:"100%"}}>
            <tr className='table-bordered'>
                    <th scope="col"></th>
                    <th scope="col">Book id</th>
                    <th scope="col">Book title</th>
                    <th scope="col">Book category</th>
                    <th scope="col">Author</th>
                    <th scope="col">Published</th>
                    <th scope="col">Language</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>

                    </tr>
                    
                    
                <tbody>
                    {books}
                </tbody>
              
                       
            </table>
            </div>
                </div>
            </div>
            </div>
            </div>

    )

}
export default AdminBooks;