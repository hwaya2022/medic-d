import React from 'react'
// import {LogoImage} from '../assets';
import {Col , Container , Form , Row , Button} from "react-bootstrap"
import ReactCalendar from './ReactCalendar'

// var sectionStyle = {
//     backgroundImage: `url(${LogoImage})`
//  }

 
function PatiantLog() {
    return (
      <>
        <Container className='fonts' style={{width:"55%" , color:"#43425D"}}>
            <h1 className=" mt-5 text-center rounded b" style={{fontSize:"48"}}> احجز ميعادك اونلاين </h1>
            <br/>
            <div className="slider"></div>
            <h4 className=" mt-2 text-center b" style={{fontSize:"48"}}> املىء بياناتك الان وسنقوم بالاتصال بك لتأكيد الحجز </h4>
            <br/>
            <Row className="mt-3 mr-20 ml-20 ">
                {/* <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg">
                 <Form >
                   <Form.Group className="mb-3 rb" controlId="formBasicLname ">
                    <Form.Control style={{color:"#43425D"}} className="text-right " type="text" placeholder="الاسم الاخير" />
                  </Form.Group>
                  <Form.Group className="mb-3 text-right rd" controlId="formBasicEmail">
                      <Form.Control className="text-right " type="email" placeholder="البريد الالكتروني" />
                  </Form.Group>
                 </Form>
                </Col>
                <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg">
                <Form>
                   <Form.Group className="mb-3 ra" controlId="formBasicFname">
                    <Form.Control className="text-right " type="text" placeholder="الاسم الاول" />
                  </Form.Group>
                  <Form.Group className="mb-3 rc" controlId="formBasicPassword">
                      <Form.Control className="text-right " type="text" placeholder="رقم الهاتف" />
                  </Form.Group>               
                 </Form>
                </Col> */}


                <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg">
                 <Form className='rb'>
                   <Form.Group className="mb-3 rb" controlId="formBasicLname ">
                    <Form.Control style={{color:"#43425D"}} className="text-right " type="text" placeholder=" الاسم الاخير" />
                  </Form.Group>
                  </Form>
                  </Col>
                  <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg">
                  <Form className='ra'> 
                  <Form.Group className="mb-3 text-right ra" controlId="formBasicEmail">
                      <Form.Control className="text-right " type="email" placeholder="الاسم الاول" />
                  </Form.Group>
                 </Form>
                </Col>

                <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg">
                <Form className='rc'>
                   <Form.Group className="mb-3 rc" controlId="formBasicFname">
                    <Form.Control className="text-right " type="text" placeholder="البريد الالكتروني" />
                  </Form.Group>
                  </Form>
                  </Col>
                  <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg">
                  <Form className='rd'>
                  <Form.Group className="mb-3 rd" controlId="formBasicPassword">
                      <Form.Control className="text-right " type="text" placeholder="رقم الهاتف" />
                  </Form.Group>               
                 </Form>
                </Col>




                <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg">
                <Form>
                <Form.Select aria-label="Default select example" className="text-right">
                    <option dir="rtl" >الوقت</option>
                    <option value="1">م12 - م2</option>
                    <option value="2">م2 - 4م</option>
                    <option value="3">م4 -6م</option>
                    <option value="3">م6 - 8م</option>
                    <option value="3">م8 - 10م</option>
                    <option value="3">م10 - 12م</option>
                  </Form.Select>  
                </Form>
                </Col>
                
                <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg">
                <Form>
                <Form.Select aria-label="Default select example" className="text-right">
                    <option dir="rtl"  >العمر</option>
                    <option value="1">ماقبل عامين</option>
                    <option value="2">2 - 9</option>
                    <option value="3">9-18</option>
                    <option value="3">18 - 40</option>
                    <option value="3">40 فيما فوق</option>
                  </Form.Select>  
                 </Form>
                </Col>
                           
                <br/>    <br/>   
                {/* <Col lg={12} md={12} sm={12} className=" ml-auto mr-auto shadow-sm rounded-lg"> */}
                <ReactCalendar/>
                {/* </Col> */}
                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                <Button className=" btn-block mo ml-auto mr-auto  " type="submit">إرســـال </Button>

            </Row>

        </Container>
      </>
    )
}

export default PatiantLog