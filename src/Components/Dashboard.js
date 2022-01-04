import React ,{useState , useEffect} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Link , useNavigate} from 'react-router-dom'
import Header from './Header'


function Dashboard(){
  
  const navigate = useNavigate();
    
  useEffect(() => {
      if(!localStorage.getItem('user-info'))
      {
          navigate("/login");
      }
  }, [])

  const [data, setData] = useState([]);
  useEffect( async () => {
    let result= await fetch("https://clinic.azurewebsites.net/api/1.0/Visits/List");
     result= await result.json();
        setData(result)
         }, [])
           console.warn("result",data)

    return (
        <>
              <Header />
              <br/>
              {
    data.map((item)=>
    <div>
      <br/>
            <div className='moob'>
                <div className='cardy2'>
                    <Row style={{textAlign:"start"}}>
                        <Col lg={1} md={2} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bobo'>{item.id}|</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" ml-1 mt-auto mb-auto"><br/>
                        {/* <a href="/" className='far fa-edit ml-4' style={{fontSize:"40px",color:"white",textAlign:"left", top:"10px"}}></a> */}
                        <a href="/" style={{fontSize:"25px",color:"white", border:"4px solid white",borderRadius:"5px",  height:"35px", padding:"2px 3px 3px 3px"}} className='fas'>&#xf00d;</a>
                        <a href="/" className='far  ml-4 mb-2' style={{fontSize:"35px",color:"white" }}>&#xf044;</a>
                        
                          <p className='bo mb-4' style={{fontWeight:"600"}}>{item.user}</p>
                        </Col>
                        <Col lg={3} md={4} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bo'>0123456789</p>
                          <p className='bo'>{item.email}</p>
                        </Col>
                        <Col lg={1} md={4} sm={6} className="ml-auto mr-auto mt-auto mb-auto " >
                          <p className='bo'>{item.age} years</p>
                        </Col>
                        <Col lg={2} md={3} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bo'>22-3-2021</p>
                          <p className='bo'>mon 4:00pm</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" mt-auto mb-auto ml-4" >

                          <div className='boo'>
                          <input type="checkbox" name="arrived" checked={true} />
                          <label htmlFor="1">arrived</label>
                          <input type="checkbox" id="fruit1" name="1" value="finished"/>
                          <label htmlFor="1">finished</label>
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
                          <p className='bobo'>{item.id}|</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" ml-1 mt-auto mb-auto"><br/>
                        <a href="/" style={{fontSize:"25px",color:"#43425Ded", border:"4px solid #43425Ded",borderRadius:"5px",  height:"35px", padding:"2px 3px 3px 3px"}} className='fas'>&#xf00d;</a>
                        <a href="/" className='far  ml-4 mb-2' style={{fontSize:"35px",color:"#43425Ded" }}>&#xf044;</a>
                        
                          <p className='bo mb-4' style={{fontWeight:"600"}}>{item.user}</p>
                        </Col>
                        <Col lg={3} md={4} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bo'>0123456789</p>
                          <p className='bo'>{item.email}</p>
                        </Col>
                        <Col lg={1} md={4} sm={6} className="ml-auto mr-auto mt-auto mb-auto " >
                          <p className='bo'>{item.age} years</p>
                        </Col>
                        <Col lg={2} md={3} sm={6} className=" ml-auto mr-auto mt-auto mb-auto" >
                          <p className='bo'>22-3-2021</p>
                          <p className='bo'>mon 4:00pm</p>
                        </Col>
                        <Col lg={2} md={2} sm={6} className=" mt-auto mb-auto ml-4" >

                          <div className='boo'>
                          <input type="checkbox" name="arrived" checked={true} />
                          <label htmlFor="2">arrived</label>
                          <input type="checkbox" id="fruit1" name="2" value="finished"/>
                          <label htmlFor="2">finished</label>
                        </div>
                        </Col>
                    </Row>
                </div>
            </div>
            </div>
    )
}

            
        </>
    )
}

export default Dashboard