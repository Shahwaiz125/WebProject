import './Menubar.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import {Link} from "react-router-dom";

function Menubar() {

    return ( 
        <nav className='navbar navbar-expand-lg'style={{height:"5rem",backgroundColor:"#eee",position:"relative"}}>
            <a href="#" className='logo'> <span>Max</span>Wheels </a>

  <div className='container-fluid'>
    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id="navbarNavAltMarkup">

    <div className='bar'>
            <ul className='nav-bar'>
                <li>
                    <Link className='link' id='Options' to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='link' id='Options' to="/Features">
                        Features
                    </Link>
                </li>
                
                <li>
                    <Link className='link' id='Options' to="/Services">
                        Services
                    </Link>
                </li>
                <li>
                    <Link className='link' id='Options' to="/Contacts">
                        Contacts
                    </Link>
                </li>
                    <Link className='link' to="/Login">
                <button className="butn">Login</button>
                    </Link>
                
            </ul>
        
          </div>
      
      </div>
      
   </div>
   

</nav>



        
    
 );
        

}

export default Menubar;