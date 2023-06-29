import {Link} from 'react-router-dom';
import { Nav, Navbar, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from '../img/0acd5002683fbcf2b720004f201ee530--library-logo-library-design.jpg';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddBookForm from './addBookForm';
import MainPage from './mainPage';


const NavbarResponsive = (props) => {
    console.log("Navbar receides props logout value", props.isLogged)
    if(props.isLogged) {	
	return(
		<div>
		
		<Navbar collapseOnSelect expand ="md" bg ="dark" variant="dark">
            <Container >
                <Navbar.Brand  href ='/'>
                    <img 
                    src={logo}
                    height = '60'
                    
                        className = 'd-inline-block align-top'
                        alt ='Logo'
                        >
                    </img>
                    

                  
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id ="responsive-navbar-nav">
                <Nav className ="me-auto my-2 my-lg-0">
                    <Nav.Link style={{whiteSpace:"nowrap"}} href ="/">Main</Nav.Link>
                    <Nav.Link style={{whiteSpace:"nowrap"}} href ="/catalog">Catalog</Nav.Link>
                    <Nav.Link style={{whiteSpace:"nowrap"}} href ="/books/add">Add Book</Nav.Link>
					<Nav.Link style={{whiteSpace:"nowrap"}} href ="/">Contacts</Nav.Link>
					<Nav.Link style={{whiteSpace:"nowrap"}} href ="/">About us</Nav.Link>
                    <Nav.Link style={{whiteSpace:"nowrap"}} href ="/">{props.user}</Nav.Link>
                    <Nav.Link style={{whiteSpace:"nowrap"}}><Link style={{color:"grey", textDecoration:"none", whiteSpace:"nowrap"}} href ="/" onClick={props.logout}>Logout</Link></Nav.Link>



                </Nav>
                
                
                <Form>
                  
                    <FormControl  
                    type = "text"
                    placeholder="Search"
                    className = "mr-md-2"
                    inlineblock = "true"
                    />
                  
                  
                    </Form>
                    <Button  
                     variant = "outline-info" type= "submit"   style ={{marginLeft: '20px'}}>Search</Button>
                    
                </Navbar.Collapse>

            </Container>
        </Navbar>

      
     
		</div>	
	)
	





} else{ return(
    <div>
    
    <Navbar collapseOnSelect expand ="md" bg ="dark" variant="dark">
        <Container >
            <Navbar.Brand  href ='/'>
                <img 
                src={logo}
                height = '60'
                
                    className = 'd-inline-block align-top'
                    alt ='Logo'
                    >
                </img>
                

              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id ="responsive-navbar-nav">
            <Nav className ="me-auto my-2 my-lg-0">
                <Nav.Link style={{whiteSpace:"nowrap"}} href ="/">Main</Nav.Link>
                <Nav.Link style={{whiteSpace:"nowrap"}} href ="/catalog">Catalog</Nav.Link>
                <Nav.Link style={{whiteSpace:"nowrap"}} href ="/login">Login</Nav.Link>
                <Nav.Link style={{whiteSpace:"nowrap"}} href ="/">Contacts</Nav.Link>
                <Nav.Link style={{whiteSpace:"nowrap"}} href ="/">About us</Nav.Link>
                



            </Nav>
            
            <Form>
              
                <FormControl  
                type = "text"
                placeholder="Search"
                className = "mr-md-2"
                inlineblock = "true"
                />
              
              
                </Form>
                <Button  
                 variant = "outline-info" type= "submit"   style ={{marginLeft: '20px'}}>Search</Button>
                
            </Navbar.Collapse>

        </Container>
    </Navbar>

  
 
    </div>	
)

}
}


export default NavbarResponsive;         