import { createContext } from "react";
import Services from "./Services";
import { Link, } from "react-router-dom";
// import {data,data1} from './Services'
import { useContext } from "react";

  

const ServiceCard = (props) =>{

  // const Fname = useContext(data);
  // const Mgender = useContext(data1);

        return(
            <>
            
            {/* <h1>My name is {Fname} and my gender is {Mgender}</h1> */}
        <div className="RC">
          <div className="card" style={{ width: "18rem", margin:"1.5rem",borderColor:"black", }}>
  <div className="card-body" id='Rbody'>

    <h5 className="card-title" style={{fontSize:"1.6rem", fontWeight:"bold"}}>{props.title}</h5>
    <p className="card-text" style={{fontFamily:"sans-serif",fontSize:".8rem"}} >{props.data}</p>
    <Link className="Readmore" to="/readmore"><button className='Rbtn' style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem",cursor:"pointer"}}>Read more</button> </Link>
  </div>
  </div>
</div>
</>
        );



}

export default ServiceCard;