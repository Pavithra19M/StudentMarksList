import React from "react";
import { Container, Table } from "react-bootstrap";

const GradeC  = ({getStudentCount, newStudentData}) => {

    let z=[];
    let gradeCLength;
    const handleGradeC = () => {
        newStudentData.map((d) => {
            if(d.marks >=20 && d.marks <= 29 ){
                //console.log(`student name: ${d.studentName}, marks: ${d.marks}`)
                z.push(d)
                //console.log("z",z)
                gradeCLength = z.length
                //console.log("length,", gradeCLength)
                getStudentCount(gradeCLength, 'c')
            }
        })    
    }
    handleGradeC()

    return(
        <Container>
            <div>
                <h5>Students in C grade</h5><br/>
                <Table bordered responsive>
                   <thead>
                    <tr>
                     <th>Student Name</th>
                     <th>Marks Scored</th>   
                    </tr>
                   </thead>
                   <tbody>
                        {
                            z.map((d,index) => (
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

export default GradeC