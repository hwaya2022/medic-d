import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {Col , Container , Form , Row , Button} from "react-bootstrap"


function Post() {

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            navigate("/dashboard");
        }
    }, [])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const history =useHistory();
    const navigate = useNavigate();

    async function signUp(){
         let item={firstName,lastName,username,email,password}
         console.warn(item)

         let result= await fetch("https://clinic.azurewebsites.net/api/Auth/register",{
             method:'POST',
             body:JSON.stringify(item),
             headers:{
                 "Content-Type" : 'application/json',
                 "Accept": 'application/json'
             }
         })
         result= await result.json()
        //  console.warn("result", result)
        localStorage.setItem("user-info", JSON.stringify(result))
        // history.push("/add")
        navigate("/dashboard");

        
        }
        return (
            <>
                {/* <form >
                    <input type="text" name="firstName"  value={firstName} onChange={(e) => setFirstName(e.target.value)}/>اسم اول
                    <br />
                    <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>اسم اخير
                    <br/>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/> مستخدم
                    <br />
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/> ايميل  .
                    <br/>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>كلمة سر
                    <br/>
                   <button type='submit' onClick={signUp} >submit</button>
                </form>


                <button ><Link to={'/login'}>login</Link></button>
 */}

                <Container >
            <h1 className=" mt-5 text-center rounded"> Sign up </h1>
            <Row className="mt-5 ">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                  
                 <Form >
                   <Form.Group className="mb-3" controlId="formBasicfirstName">
                    <label >First Name</label> 
                    <Form.Control placeholder="Enter First Name"  type="text" name="firstName"  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasiclastName">
                    <label >Last Name</label> 
                    <Form.Control placeholder="Enter Last Name"  type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicusername">
                    <label >Username</label> 
                    <Form.Control placeholder="Enter Username"  type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <label >Email address</label> 
                    <Form.Control placeholder="Enter email"  type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                       <label>Password</label>
                      <Form.Control placeholder="Password"  type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
               
                 </Form>
                 <Button className="success btn-block mo ml-auto mr-auto" type="submit" onClick={signUp}>Sign up</Button>

                </Col>
            </Row>
        </Container>
            </>
        )
    }


export default Post
