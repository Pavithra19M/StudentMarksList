import React,{useState, useEffect} from "react";
import {Container, Form, Button, Row, Col} from 'react-bootstrap'

const Employee = () => {
    const[empName, setEmpName] = useState('')
    const [employees, setEmployees] = useState(['Alex','Bob','Alex','John','Bob','Alex','Bob'])

    const submitHandler = () => { 
       setEmployees([...employees, empName])
       setEmpName("")
    }
    console.log("emp",employees)

    const uniqueArray = [];
    employees.forEach((m) => {
    const obj = { key: m, count: 1 };
    const index = uniqueArray.findIndex((f) => { return f.key === m; });
    index === -1 ? uniqueArray.push(obj) : uniqueArray[index].count += 1;
    });



    return(
        <Container >
             <div className="div-style1">
                    <h2>Web Portal</h2>
                    <div style={{display:"flex"}}>
                               <div>
                                    <Form >
                                        <Form.Group className="mb-3" controlId="control1">
                                            <Form.Label>Update non-compliant list:</Form.Label>
                                            <Form.Control type="text"  
                                                        value ={empName}
                                                        onChange={(e)=>setEmpName(e.target.value)}                 
                                            />
                                        </Form.Group>
                                    </Form>
                               </div>
                               <div style={{marginTop:"2rem", marginLeft:"2rem"}}>
                                    <Button style={{backgroundColor:"brown", border:"1px solid brown"}}
                                     type="button"
                                     onClick = {submitHandler}>Add</Button>
                               </div>
                            
                    </div>

                    <Row>
                        <Col md={6}>
                            <h2 >Non-Compliant Employees</h2>
                            {
                              uniqueArray.map((d, i) => (
                                <ul>
                                    <li key={i}>{d.key}:<span 
                                        style={{backgroundColor:"grey", borderRadius:"5px",
                                        padding:"0 1rem", marginLeft:"2rem"}}>{d.count}</span> </li>
                                </ul>
                              ))
                            }
                            
                        </Col>

                        <Col md={6}>
                        </Col>
                    </Row>
             </div>
        </Container>
    )
}

export default Employee