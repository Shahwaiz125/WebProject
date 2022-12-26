import { Link,useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Menubar.css";
import Menubar from "./Menubar";

function Login() {
    const navigate = useNavigate();
    const Email = useRef(null);
    const Password = useRef(null);
    const onclick=()=>{

 console.log(Email.current.value);
 console.log(Password.current.value);
      if(!Email.current.value && !Password.current.value){
        return window.confirm("please fill form");
      }

      if(Email.current.value=== "shawaiziqbal125@gmail.com" && Password.current.value==="123543")
      {
        navigate("/")
      }

      if(Email.current.value=== "Abdullah@gmail.com" && Password.current.value==="123543")
      {
        navigate("/")
      }
    }

    return ( 
    <>


        
         <div id="login-btn" >   
        
        <div className='login-form' >
    
        <form>
   
          <h3> User login </h3 >
          <input type="email" ref={Email} placeholder="Email" className="box" />
          <input type="password" ref={Password} placeholder="password" className="box" />
          <p>
            Forget your password? <Link className="Forget"  to="forget password">click here</Link>
          </p>
          <input type="submit" onClick={onclick} value="Login now" className='Btn'/>
    
          <p> <b>OR</b> <br/> 
          
          <button className="signupbtn" onClick={()=>navigate('/signup')} >SignUp</button> 
          </p>
          
        </form>
        



        </div>
        </div> 
  </>

     );
}

export default Login;