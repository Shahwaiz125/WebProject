
import './Menubar.css';
import { useRef,createContext } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

// const data = createContext();
// const data1 = createContext();

const Services = () => {
   const inputRef=useRef(null)

   function handleInput(){

     console.log("Function is calling...")
    
      inputRef.current.focus();
     inputRef.current.style.color = "red";
   }

  // const name="shahwaiz"
  // const gender="Male"
    return ( 
      <div>
        <h1 className="heading" style={{marginTop:"2rem"}}>Our <span id="Sspan">Services</span></h1>

           {/* <data.Provider value={name}>
             <data1.Provider value={gender}>
            <ServiceCard/>
            </data1.Provider>
            </data.Provider> */}

    <div className="Scard" style={{ justifyContent:"center"}}>
        <ServiceCard title="Car Selling" data="We provide a huge ammount of sports and luxuary vehicles under one roof." />
        <ServiceCard title="Parts Repair" data="We provide a huge ammount of sports and luxuary vehicles under one roof."/>
        <ServiceCard title="Car Insurance" data="We provide a huge ammount of sports and luxuary vehicles under one roof."/>
    </div>

        <div className="Scard-2" style={{ justifyContent:"center"}}>
        <ServiceCard title="Battery Replacement" data="We provide a huge ammount of sports and luxuary vehicles under one roof."/>
        <ServiceCard title="Oil Change" data="We provide a huge ammount of sports and luxuary vehicles under one roof."/>
        <ServiceCard title="24/7 Support" data="We provide a huge ammount of sports and luxuary vehicles under one roof."/>
        </div>

        

        <div className="newletter">
          
          <h3>Subscribe for latest updates</h3>

          <p>Lorem ipsum dolor sit amet consectetur.</p>

          <form className='form' action="">
            <input type="email" placeholder='Enter your Email'  ref={inputRef} />
            <Link>
            <button id='Fbtn' onClick={handleInput}>Submit</button>
            </Link>
            
          </form>

        </div>
        {/* <input type="submit" className='subscribe'  /> */}


      </div>

      

     );
}

export default Services;
// export {data,data1};


          {/* <div
  id="carouselExampleControls"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= {require('../images1/home-img.png')} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src= {require('../images1/Land_Cruiser_300_-_PNG.png')} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src= {require('../images1/home-img.png')} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

{/* <div className="Service">

    <h1 className="heading">Our <span id="Sspan">Services</span></h1>

    <div className="box-container">
      <div className="First3">
      <div className="box">
      <i > <FaCar/></i>
      <h4>Car Selling</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <Link className="Readmore"><button className="Rbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}}> Read more</button></Link>

      </div>

      <div className="box">
      <i > <FaCar/></i>
      <h4>Parts Repair</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <Link className="Readmore"><button className="Rbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}}> Read more</button></Link>

      </div>

      <div className="box">

      <i > <FaCar/></i>
      <h4>Car Insurance</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <Link className="Readmore"><button className="Rbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}}> Read more</button></Link>

      </div>
      

      <div className="box">

      <i > <FaCar/></i>
      <h4>Battery Replacement</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <Link className="Readmore"><button className="Rbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}}> Read more</button></Link>

      </div>

      <div className="box">

      <i > <FaCar/></i>
      <h4>Oil Change</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <Link className="Readmore" to="\Read more"><button className="Rbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}}> Read more</button></Link>

      </div>

      <div className="box">

      <i > <FaCar/></i>
      <h4>24/7 Support</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <Link className="Readmore" to="\Read more"><button className="Rbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}}> Read more</button></Link>

      </div>
      </div>
      </div>

</div>
 */}

        
        
        