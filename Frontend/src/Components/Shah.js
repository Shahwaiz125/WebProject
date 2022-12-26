import { Component } from "react";
class Shahwaiz extends Component {
    state = { 
        StudentRecord:[
            {id:1,name:"Ali",section:"B",cgpa:2.93},
            {id:2,name:"saad",section:"B",cgpa:3.1},
            {id:3,name:"maaz",section:"B",cgpa:3.21},
            {id:4,name:"faheem",section:"B",cgpa:3.4},
            {id:5,name:"shano",section:"B",cgpa:3.3}
        ]
     } 

     handleDelete=(id) =>  {
        const updateRecord = this.state.StudentRecord.filter((srf) => 
        srf.id!=id
        )
     
     this.setState(
        {
            StudentRecord:updateRecord

           
        }
     );
     console.log("clicked..." + id);
    }
    render() { 
        return (
            <div>
                <table className="table table-bordered">
                    <tr>
                        <thead className="th th-bordered">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Section</th>
                            <th>CGPA</th>
                        </thead>
                        <tbody>
                            {
                            this.state.StudentRecord.map((SR) => (
                            <tr key={SR.id}>
                                <td>{SR.id}</td>
                                <td>{SR.name}</td>
                                <td>{SR.section}</td>
                                <td>{SR.cgpa}
                                </td>
                                <td>
                                    <button className="btn btn-danger" 
                                onClick={() => this.handleDelete(SR.id)}>Delete</button>
                                </td>
                            </tr>
                            ))
                            }
                        </tbody>
                    </tr>
                </table>
            </div>
        );
    }
}
 
export default Shahwaiz;