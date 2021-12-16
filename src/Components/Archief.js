import React from 'react'

const Archief = () => {
    return (
        <>
            <Header />
              <br/>
            <div className='moob'>
                <div className='cardy2'>
                    <Row style={{textAlign:"start"}}>
                        <Col lg={1} md={2} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bobo'>1|</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" ml-1 mt-auto mb-auto"><br/>
                        {/* <a href="/" className='far fa-edit ml-4' style={{fontSize:"40px",color:"white",textAlign:"left", top:"10px"}}></a> */}
                        <a href="/" style={{fontSize:"25px",color:"white", border:"4px solid white",borderRadius:"5px",  height:"35px", padding:"2px 3px 3px 3px"}} className='fas'>&#xf00d;</a>
                        <a href="/" className='far  ml-4 mb-2' style={{fontSize:"35px",color:"white" }}>&#xf044;</a>
                        
                          <p className='bo mb-4' style={{fontWeight:"600"}}>Ahmed Gamal</p>
                        </Col>
                        <Col lg={3} md={4} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bo'>0123456789</p>
                          <p className='bo'>Ahmed.dsdsd@gmail.com</p>
                        </Col>
                        <Col lg={1} md={4} sm={6} className="ml-auto mr-auto mt-auto mb-auto " >
                          <p className='bo'>50 years</p>
                        </Col>
                        <Col lg={2} md={3} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bo'>22-3-2021</p>
                          <p className='bo'>mon 4:00pm</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" mt-auto mb-auto ml-4" >
                          {/* <p className='bo '>arrived</p>
                          <p className='bo '>finished </p> */}

                          <div className='boo'>
                          <input type="checkbox" name="arrived" checked={true} />
                          <label for="1">arrived</label>
                          <input type="checkbox" id="fruit1" name="1" value="finished"/>
                          <label for="1">finished</label>
                        </div>
                        </Col>
                    </Row>
                </div>
            </div>
 
                 <br/>

                 <div className='moob'>
                <div className='cardy3'>
                    <Row style={{textAlign:"start"}}>
                        <Col lg={1} md={2} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bobo'>2|</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" ml-1 mt-auto mb-auto"><br/>
                        {/* <a href="/" className='far fa-edit ml-4' style={{fontSize:"40px",color:"white",textAlign:"left", top:"10px"}}></a> */}
                        <a href="/" style={{fontSize:"25px",color:"#43425Ded", border:"4px solid #43425Ded",borderRadius:"5px",  height:"35px", padding:"2px 3px 3px 3px"}} className='fas'>&#xf00d;</a>
                        <a href="/" className='far  ml-4 mb-2' style={{fontSize:"35px",color:"#43425Ded" }}>&#xf044;</a>
                        
                          <p className='bo mb-4' style={{fontWeight:"600"}}>Ahmed Gamal</p>
                        </Col>
                        <Col lg={3} md={4} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bo'>0123456789</p>
                          <p className='bo'>Ahmed.dsdsd@gmail.com</p>
                        </Col>
                        <Col lg={1} md={4} sm={6} className="ml-auto mr-auto mt-auto mb-auto " >
                          <p className='bo'>50 years</p>
                        </Col>
                        <Col lg={2} md={3} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bo'>22-3-2021</p>
                          <p className='bo'>mon 4:00pm</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" mt-auto mb-auto ml-4" >
                          {/* <p className='bo '>arrived</p>
                          <p className='bo '>finished </p> */}

                          <div className='boo'>
                          <input type="checkbox" name="arrived" checked={true} />
                          <label for="1">arrived</label>
                          <input type="checkbox" id="fruit1" name="1" value="finished"/>
                          <label for="1">finished</label>
                        </div>
                        </Col>
                    </Row>
                </div>
            </div> 
        </>
    )
}

export default Archief
