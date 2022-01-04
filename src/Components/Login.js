import React ,{useState , useEffect}from 'react'
import {Col , Container , Form , Row , Button} from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import Loading from './Loading'


function Login() {

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            navigate("/dashboard");
        }
    }, [])

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [showloading, setShowloading] = useState(false)


    async function login()
    {
        let item={email,password}
        console.warn(item)
        setShowloading(true)
        let result=await fetch("https://clinic.azurewebsites.net/api/Auth/token",{
            method:'POST',
            headers:{
                "Content-Type" : "application/json",
                "Accept":'application/json'
            },
            body:JSON.stringify(item)
        });
        result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/dashboard");
        setShowloading(false)

    }
  

      return (
        <>
        <Container >
            <h1 className=" mt-5 text-center rounded"> Login </h1>
            <Row className="mt-5 ">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                  
                 <Form >
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                    <label >Email address</label> 
                    <Form.Control placeholder="Enter email"  type="text" name="firstName" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                       <label>Password</label>
                      <Form.Control placeholder="Password"  type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
               
                 </Form>
                 <Button className="success btn-block mo ml-auto mr-auto" type="submit" onClick={login}>Login</Button>
                        {
                            showloading && <Loading/>
                        }
                </Col>
            </Row>
        </Container>

                   
      </>
)
}


export default Login


