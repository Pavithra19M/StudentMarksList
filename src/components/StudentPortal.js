import React,{useState, useEffect} from 'react';
import {Form, Container,Row, Col, Button } from 'react-bootstrap';
import GradeA from './GradeA';
import GradeB from './GradeB';
import GradeC from './GradeC';
import studentData from './studentData';

const StudentPortal = () => {

    const[nameInput, setNameInput] = useState('')
    const[marksInput,setMarksInput] = useState('')
    const[countA, setCountA] = useState(0)
    const[countB, setCountB] = useState(0)
    const[countC, setCountC] = useState(0)
    const[studentList, setStudentList] = useState(localStorage.getItem('storedData') ? 
                                                  JSON.parse(localStorage.getItem('storedData')) : studentData)

    //console.log("studentList", studentList)

    useEffect(()=>{
        localStorage.setItem('storedData', JSON.stringify(studentList))
    },[studentList])

    const handleUploadedData = (e, _id, studentName, marks) => {
        e.preventDefault()
        console.log("id, name, marks", _id, studentName, marks)
        //setStudentList([{_id,studentName,marks}])
        //setStudentList((prevState) => ([...prevState,{_id,studentName,marks}]))
        let newStudentEntry = {_id,studentName,marks}
        setStudentList((prevState) => ([...prevState,newStudentEntry]))
        setMarksInput("")
        setNameInput("")
    }

    console.log("stored data", localStorage.getItem('storedData'))

    console.log("new list",studentList)
    console.log("studentdta", studentData)

    const getTotalStudentCount = (studentCount, grade) => {
        if(grade == 'a'){
            setCountA(studentCount)
        }
        if(grade == 'b'){
            setCountB(studentCount)
        }
        if(grade == 'c'){
            setCountC(studentCount)
        }
    }


    return(
        <Container>
            <h1>Student Portal</h1>
            <br/>
            <Row>
                <Col md={4}>
                <Form>
                    <Form.Group className="mb-3 label-style" controlId="studentName">
                        <Form.Label>Student Name:</Form.Label>
                        <Form.Control type="text" placeholder="enter student name" 
                                      value={nameInput}
                                      onChange = {(e) => setNameInput(e.target.value)}
                        />
                    </Form.Group>
                </Form>
                </Col>

                <Col md={4}>
                <Form>
                    <Form.Group className="mb-3 label-style" controlId="marks">
                        <Form.Label>Marks Scored:</Form.Label>
                        <Form.Control type="text" placeholder="enter your marks" 
                                      value={marksInput}
                                      onChange={(e) => setMarksInput(parseInt(e.target.value))}
                        />
                    </Form.Group>
                </Form>
                </Col>

                <Col md={4}>
                    <div className='btn-style'>
                        <Button type="submit" variant='primary' 
                        size='lg' onClick = {(e)=>handleUploadedData(e,studentData.length+1,nameInput,marksInput)}>Upload</Button>
                    </div>
                </Col>
            </Row>
            <br/><br/>

            <div className='div-style'>
                <h3>Results:</h3>
                <p>Number of student got C Grade: {countC}</p>
                <p>Number of student got B Grade: {countB} </p>
                <p>Number of student got A Grade: {countA}</p>
                <hr/>   
                <GradeA getStudentCount = {getTotalStudentCount} newStudentData = {studentList}/>
                <hr/>   
                <GradeB getStudentCount = {getTotalStudentCount} newStudentData = {studentList}/>
                <hr/>
                <GradeC getStudentCount = {getTotalStudentCount} newStudentData = {studentList}/>

            </div> 
        </Container>
    )
}

export default StudentPortal
