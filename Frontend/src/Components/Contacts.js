import "./Menubar.css";
import React from "react";
import * as Icons from "react-icons/fa";
import { useRef } from "react";
import { Link,useNavigate} from "react-router-dom";

function Contacts() {
    const navigate = useNavigate();
    const name = useRef(null);
    const email = useRef(null);
    const number = useRef(null);
    const message = useRef(null);

    const onclick=(e)=>{
        
        console.log(name.current.value);
        console.log(email.current.value);
        console.log(number.current.value);
        console.log(message.current.value);
        
        if(name.current.value==="shahwaiz" && email.current.value==="shawaiziqbal125@gmail.com" && number.current.value==="03208055486" && message.current.value==="Great work"){
               navigate("/Contacts");
              return window.confirm("Message sent successfully");
        }

        
    }

    // const onsubmmit=()=>{
    //     if(!name.current.value==="shahwaiz iqbal" && !email.current.value==="shawaiziqbal125@gmail.com" && !number.current.value==="03208055486" && !message.current.value==="Great work"){
    //         navigate("/Contacts");
    //     }
    // }
    return ( 
         
        <div className="contact">

        <h1 className="heading" style={{marginTop:"2rem"}}><span>Contact</span> Us</h1>
        

        <div className="row">
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105627.88753362693!2d73.1658979995765!3d34.17520328069245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3111557ac517%3A0x6e59a635b12e952c!2sAbbottabad%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1668150415392!5m2!1sen!2s" allowfullscreen=" " loading="lazy" ></iframe>
         
         <div className="Cform">
        <form className="contactform" >
            <h3>Get in Touch</h3>
            <input type="text" placeholder="Name" className="BOX" ref={name} /><br />
            <input type="email" placeholder="Email" className="BOX" ref={email} /><br />
            <input type="number" placeholder="Number" className="BOX" ref={number} /><br />
            <textarea placeholder="Message" className="BOX" cols="30" rows="7" ref={message}></textarea><br />
            <input classname="BUTUN" type="submit"  value="Send message"  onClick ={onclick} style={{backgroundColor:"dodgerblue",color:"#fff",width:"9rem",height:"2rem",border:"none",fontWeight:"600",fontSize:"1.2rem",borderRadius:".2rem",alignItems:"center",marginLeft:"14rem",marginTop:"2rem"}}/>
        </form>
        </div>
        
        <hr />
        </div>
        <div/>
        <div>
 
<div className="footer">

<div className="box-container">

    <div className="Qlinks">
        <h3 style={{marginLeft:".4rem",fontWeight:"bold"}}>Our Branches</h3>
        <ul className="QL" >
        
        <li className="Qlist"><Link className="Phone-1" to="/Karachi" style={{textDecoration:"none"}}>Karachi</Link> </li>
        <li className="Qlist"><Link className="Phone-1" to="/Karachi" style={{textDecoration:"none"}}>Abbotabad</Link></li>
        <li className="Qlist"><Link className="Phone-1" to="/Karachi" style={{textDecoration:"none"}}>Lahore</Link></li>
        <li className="Qlist"><Link className="Phone-1" to="/Karachi" style={{textDecoration:"none"}}>Islamabad</Link></li>
        <li className="Qlist"><Link className="Phone-1" to="/Karachi" style={{textDecoration:"none"}}>Multan</Link></li>
       
        
        </ul>
    </div>

    <div className="Qlinks">
        <h3 style={{marginLeft:"1.8rem"}}>Contacts</h3>
        <ul className="QL">
            <li className="Qlist" ><Link className="Phone-1" to="/pbone" style={{textDecoration:"none",}}>Phone 1: +92 320 8055 486</Link></li>
            <li className="Qlist"><Link className="Phone-1" to="/pbone" style={{textDecoration:"none"}}>Phone 1: +92 305 8955 495</Link></li>
            <li className="Qlist"><Link className="Phone-1" to="/Email" style={{textDecoration:"none"}}>Fax: maxcars.pk@gmail.com</Link></li>
            <li className="Qlist"><Link className="Phone-1" to="/Envelope" style={{textDecoration:"none"}}>shawaiziqbal125@gmail.com</Link></li>
            <li className="Qlist"><Link className="Phone-1" to="/Karachi" style={{textDecoration:"none"}}></Link></li>
        </ul>
    </div>

    <div className="Qlinks">
        <h3>Quick Links</h3>
        <ul className="QL">
            <li className="Qlist"><Link className="Phone-1" to="/" style={{textDecoration:"none"}}>Home</Link></li>
            <li className="Qlist"><Link className="Phone-1" to="/Services" style={{textDecoration:"none"}}>Service</Link></li>
            <li className="Qlist"><Link className="Phone-1" to="/Features" style={{textDecoration:"none"}}>Feature</Link></li>
            <li className="Qlist"><Link className="Phone-1" to="/Login" style={{textDecoration:"none"}}>Login</Link></li>
        </ul>
    </div>

    <div className="Qlinks">
        <h3 style={{marginLeft:"1rem"}}>Follow Us</h3>
        <ul className="QL">
            <li className="Qlist"><Link className="Phone-1" to="/pbone" style={{textDecoration:"none"}}>Facebook</Link></li>
            <li className="Qlist"><Link className="Phone-1" to="/pbone" style={{textDecoration:"none"}}>Instagram</Link></li>
            <li className="Qlist"><Link className="Phone-1" to="/Email" style={{textDecoration:"none"}}>Twitter</Link></li>
            <li className="Qlist"><Link className="Phone-1" to="/Envelope" style={{textDecoration:"none"}}>Snapchat</Link></li>
            <li className="Qlist"><Link className="Phone-1" to="/Karachi" style={{textDecoration:"none"}}>Youtube</Link></li>
        </ul>
    </div>

      
</div>

        <div className="Credit">
            <h5>Created By ShahWaiz Iqbal || All Right Reserved <Icons.FaRegistered/></h5>
        </div>
</div>

</div>


</div>

        
    );

}

export default Contacts;