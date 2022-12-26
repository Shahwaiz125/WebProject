import { Link } from "react-router-dom";
import Menubar from "./Menubar";
import "./Menubar.css";

function Signup() {
    return ( 
       
        <>
        
       <div className="signup-form">
       <form>
   
   <h3>Sign Up</h3>
   <input type="text" placeholder="First name" className="box"/>
   <input type="text" placeholder="Last name" className="box"/>
   <input type="email" placeholder="email" className="box" />
   <input type="password" placeholder="password" className="box" />
   <input type="password" placeholder="Confirm password" className="box" />
   <p>
     Already have an account? <Link className="HaveAccount" to="/Login" style={{textDecoration:"none"}}>Login</Link>
   </p>
   <input type="submit" value="SignUp Now" className="S-Btn"/>
   
   {/* <p><b>OR</b><br/> <Link className='Btn' to="/SignUp"><button style={{color:"white",backgroundColor:"deepskyblue",borderColor:"deepskyblue"}}>SignUp</button></Link></p> */}
   </form>
    </div>
    </>
     );
}

export default Signup;