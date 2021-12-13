
import React from 'react'
import {Col , Container , Form , Row , Button} from "react-bootstrap"

function Login() {
    return (
      <>
        <Container>
            <h1 className=" mt-5 text-center rounded"> Login </h1>
            <Row className="mt-5 ">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                 <Form>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                    <label>Email address</label> 
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                       <label>Password</label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
               
                     <Button variant="success btn-block" type="submit">Login</Button>
                 </Form>
                </Col>
            </Row>
        </Container>
      </>
    )
}

export default Login
