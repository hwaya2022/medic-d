import React from "react";
import { Container , Button } from "react-bootstrap";

function WaitingPage() {
    return (
      <>
        <Container style={{width:"55%" , color:"#43425D"}}>
            <h1 className="shadow-sm mt-5 text-center rounded b" style={{fontSize:"48"}}> احجز ميعادك اونلاين </h1>
            <br/>
            <div className="slider"></div>
            <h4 className=" mt-2 text-center b" style={{fontSize:"48"}}> املىء بياناتك الان وسنقوم بالاتصال بك لتأكيد الحجز </h4>
            <br/>   <br/>  <br/> <br/>   <br/>  <br/>


                <p id="cor" >  تم ارسال بياناتك بنجاح <span >&#x2714;</span></p>
                <br/>  

               <button className=" btn-block mo ml-auto mr-auto  " type="submit"> &#60; سجل ميعاد اخر  </button>
            </Container>
        </>
        )
    }
export default WaitingPage