import React from 'react'
import { Col, Row , Button, Dropdown } from 'react-bootstrap'
import { NavDropdown  } from 'react-bootstrap'
import { Link , useNavigate} from 'react-router-dom'


function Header() {
  let user= JSON.parse(localStorage.getItem('user-info'))
  // console.warn(user)
  const navigate = useNavigate();

  function logOut(){
      localStorage.clear();
      navigate("/login");
  }
  
    return (
        <>
          <div className='container-fluid'>
            
            <Row>
                <Col lg={5} md={6} sm={6} className=" ml-auto mr-auto mt-auto mb-auto"> 
           <div className='boxcontainer'>
             <table className='elementscontainer'>
                 <td>
                     <input type="text" placeholder='Search ....' className='search' />
                 </td>
                 <td>
                     <a href='#'><i className="material-icons">search</i></a>
                 </td>
             </table>
           </div>
                </Col>
                <Col lg={3} md={4} sm={6} className=" ml-auto mr-auto mt-auto mb-auto"> 
                     <p style={{fontSize:"30px"}}>LOGO</p>
                </Col>
                <Col lg={1} md={6} sm={6} > 
               <Button href="/archief" className='btn-block vo ml-auto mr-auto mt-2'>Archief</Button>
               </Col>
                <Col lg={1} md={4} sm={6} className=" ml-auto mr-auto mt-auto mb-auto"> 
                <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                                Hello {user.username}
                </Dropdown.Toggle>

                <Dropdown.Menu className='drop'>
                   <Dropdown.Item className='drpdown' onClick={logOut}>logout</Dropdown.Item>
               </Dropdown.Menu>
              </Dropdown>
                </Col>
            </Row>
            <br/>
          </div>  
        </>
    )
}

export default Header