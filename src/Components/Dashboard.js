import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Dashboard = () => {
    return (
        <>
            <Container>
                <br/><br/><br/><br/>
                <div className='cardy'>
                     <ul className='nav justify-content-center'>
                         <li className='nav-item'>
                         <a class="nav-link disabled" href="#">num</a>
                         </li>
                         <li className='nav-item'>
                         <a class="nav-link disabled" href="#">name</a>
                         </li>
                         <li className='nav-item'>
                         <a class="nav-link disabled" href="#">phone</a>
                         <a class="nav-link disabled" href="#">email</a>
                         </li>
                         <li className='nav-item'>
                         <a class="nav-link disabled" href="#">age</a>
                         </li>
                         <li className='nav-item'>
                         <a class="nav-link disabled" href="#">date</a>
                         </li>
                         <li className='nav-item'>
                         <a class="nav-link disabled" href="#">check</a>
                         <a class="nav-link disabled" href="#">check</a>
                         </li>
                     </ul>
                </div>
            </Container>




            <Container>
                <br/><br/>
                <div className='cardy'>
                    <Row>
                        <Col lg={2} md={2} sm={6} className=" ml-auto mr-auto" >
                          <p>num</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" ml-auto mr-auto" >
                          <p>name</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" ml-auto mr-auto" >
                          <p>phone</p>
                          <p>email</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" ml-auto mr-auto" >
                          <p>age</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p>date</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" ml-auto mr-auto" >
                          <p>check</p>
                          <p>check</p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <br/>
            <div className='moob'>
                <div className='cardy2'>
                    <Row >
                        <Col lg={1} md={2} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bobo'>1|</p>
                        </Col>
                        <Col lg={2} md={4} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bo'>ahmed gamal</p>
                        </Col>
                        <Col lg={3} md={2} sm={6} className=" ml-auto mr-auto" >
                          <p className='bo'>0123456789</p>
                          <p className='bo'>ahmed.dsdsd@gmail.com</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className="ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bo'>50 years</p>
                        </Col>
                        <Col lg={3} md={3} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bo'>22-3-2021</p>
                          <p className='bo'>mon 4:00pm</p>
                        </Col>
                        <Col lg={1} md={2} sm={6} className=" ml-auto mr-auto" >
                          <p className='bo'>arrived</p>
                          <p className='bo'>finished  kll</p>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    )
}

export default Dashboard
