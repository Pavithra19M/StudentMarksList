import React from "react";
import {Container, Table} from 'react-bootstrap';

const GradeA = ({getStudentCount, newStudentData}) => {

    var x=[];
    let gradeALength;
    const handleGradeA= () => {
        newStudentData.map((d) => {
            if(d.marks >= 40 && d.marks <= 50){
                //console.log(`name: ${d.studentName}, marks: ${d.marks}`)
                x.push(d)
                //console.log("d", d)
                //console.log("x",x)
                gradeALength = x.length
                //console.log("length", gradeALength)
                getStudentCount(gradeALength, 'a')
            }
        })
    }
    handleGradeA()


    return(
        <Container>
           <div>
                <h5>Students in A grade</h5> <br/>

                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Marks Scored</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                          x.map((d, index) => (
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

export default GradeA