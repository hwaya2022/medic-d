import React from 'react'
import { Col, Row , Button } from 'react-bootstrap'

const Header = () => {
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
                     <a href='#'><i class="material-icons">search</i></a>
                 </td>
             </table>
           </div>
                </Col>
                <Col lg={3} md={4} sm={6} className=" ml-auto mr-auto mt-auto mb-auto"> 
                     <p style={{fontSize:"30px"}}>LOGO</p>
                </Col>
                <Col lg={1} md={6} sm={6} > 
               <Button href="/" className='btn-block vo ml-auto mr-auto mt-2'>Archief</Button>
               </Col>
                <Col lg={3} md={4} sm={6} className=" ml-auto mr-auto mt-auto mb-auto"> 
                <p style={{fontSize:"30px"}}>Hello :User name</p>
                </Col>
            </Row>
          </div>  
        </>
    )
}

export default Header
