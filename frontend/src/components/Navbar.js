import {Link} from 'react-router-dom';
import { Nav, Navbar, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from '../img/0acd5002683fbcf2b720004f201ee530--library-logo-library-design.jpg';
import {useState,useEffect} from 'react';


const NavbarResponsive = (props) => {
    const [searched, setSearched] =useState('')
    const onChange = (event) =>{
        console.log("detect changes in search")
        setSearched(event.target.value)
    }


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
                    
					<Nav.Link style={{whiteSpace:"nowrap"}} href ="/">Contacts</Nav.Link>
					<Nav.Link style={{whiteSpace:"nowrap"}} href ="/">About us</Nav.Link>
                    <Nav.Link style={{whiteSpace:"nowrap"}} href ="/userorders">{props.user}</Nav.Link>
                    <Nav.Link style={{whiteSpace:"nowrap"}}><Link style={{color:"grey", textDecoration:"none", whiteSpace:"nowrap"}} href ="/" onClick={props.logout}>Logout</Link></Nav.Link>
                    <Nav.Link className="btn btn-secondary"style={{ marginLeft:"20px", marginRight:"20px", whiteSpace:"nowrap"}} href ="/adminpage">Admin part</Nav.Link>


                </Nav>
                
                
                <Form>
                  
                    <FormControl  
                    type = "text"
                    placeholder="Search"
                    className = "mr-md-2"
                    inlineblock = "true"
                    onChange= {onChange}
                    name="searched"
                    id="searched"
                    />
                  
                  
                    </Form>
                    
                     <Link to={`/search/${searched}`} className="btn btn-primary btn-oultine" style= {{borderRadius: "8px", marginLeft:"20px", fontSize:"14px"}}>
                     Search
                        
                        
                        </Link>
                    
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
                onChange= {onChange}
                    name="searched"
                    id="searched"
                />
              
              
                </Form>
                <Link to={`/search/${searched}`} className="btn btn-primary" style= {{borderRadius: "8px", marginLeft:"20px", fontSize:"14px"}}>
                     Search
                        
                        
                        </Link>
                
            </Navbar.Collapse>

        </Container>
    </Navbar>

  
 
    </div>	
)

}
}


export default NavbarResponsive;         