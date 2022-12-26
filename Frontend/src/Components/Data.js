 import { Link } from 'react-router-dom';
 
 import "./Menubar.css";
 const Data = (props) => {

  return ( 
   <div style={{padding:".5rem", marginLeft:".6rem",}}>
      <div className="C card" style={{ width: "18rem" }}>
         <img src={props.imgsrc}/>
     <div className="card-body">
           <h5 className="card-title" style={{fontSize:"1.7rem",fontWeight:"bold"}}>{props.title}</h5>
           <p className="card-price">{props.price}</p>
           
           <p className="specs">{props.specs}<br/>{props.specs2}</p>
           
           
          <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}} >Check Out</button> </Link>
    </div>
        </div>
   </div>
     );
 }

 export default Data;