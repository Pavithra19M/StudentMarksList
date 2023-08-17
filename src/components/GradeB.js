import React from "react";
import {Table, Container} from 'react-bootstrap'; 

const GradeB = ({getStudentCount,newStudentData}) => {

    let y=[];
    let gradeBLength;
    const handleGradeB = () => {
        newStudentData.map((d) => {
            if(d.marks >= 30 && d.marks <= 39){
                //console.log(`student name: ${d.studentName} marks: ${d.marks}`)
                y.push(d)
                //console.log("y is", y)
                gradeBLength = y.length
                //console.log("length is", gradeBLength)
                getStudentCount(gradeBLength, 'b')
            }
        })
    }
    handleGradeB()

    return(
        <Container>
            <div>
                <h5>Students in B grade</h5>
                <br/>
                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Marks Scored</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           y.map((d, index) => (
                            <tr key={index}>
                                <td>{d.studentName}</td>
                                <td>{d.marks}</td>
                            </tr>
                           ))
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default GradeB