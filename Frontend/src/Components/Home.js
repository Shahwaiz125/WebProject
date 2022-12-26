import "./Menubar.css";
import { Link } from "react-router-dom";
import Data from "./Data";

import { FaHome } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

const Home = () => {
    return ( 
        <>

        <div className="home" id="home">
            <h1 className="home-par">Find your car</h1>
            <img className="home-para" src={require('../images1/home-img.png')}/>
            <Link className="E" to="/Features">Explore Cars</Link>
        </div>

        <div className="icons-container">
            <div className="Icons">
                <div className="content">
                    <div className="ICON">
                <i id="I"> <FaHome />  </i>
                </div>
                    <h3>100+</h3>
                    <p>branches</p>
                </div>
            </div>

            <div className="icons">
                    <div className="content">
                        <div className="ICON2">
                    <i id="I"> <FaCar />  </i>
                    </div>
                    <h3>4500+</h3>
                    <p>cars sold</p>
                </div>
            </div>

            <div className="icons">
                    <div className="content">
                        <div className="ICON3">
                    <i id="I"> <FaUsers />  </i>
                    </div>
                    <h3>590+</h3>
                    <p>happy clients</p>
                </div>
            </div>

            <div className="Icons2">
                    <div className="content">
                        <div className="ICON">
                    <i id="I"> <FaCar />  </i>
                    </div>
                    <h3>890+</h3>
                    <p>new cars</p>
                </div>
            </div>

</div>

<div className="Cdiv">
    <div className="vehicles">
        <h1 className="heading">Popular <span>Vehicles</span></h1>
    </div>
    <div className="Cardsection" style={{marginTop:"3rem"}}>
<div className="Cards">
    
   <Data title="Porche GTS" price="Price: $55,000/-" specs="Convertable Petrol" specs2="260kmph  Auto" imgsrc={require('../images1/vehicle-1.png')}/>
   <Data title="Porche Panaroma" price="Price: $43,000/-" specs="4-Seats Hybrid" specs2="220kmph 6-Gear" imgsrc={require('../images1/vehicle-3.png')}/>
   <Data title="Porche Taycan" price="Price: $35,000/-" specs="Manual Petrol" specs2="195kmph 6-Gear" imgsrc={require('../images1/vehicle-2.png')}/>
   <Data title="Mercedies SLS " price="Price: $67,000/-" specs="Convertable Petrol" specs2="245kmph Auto" imgsrc={require('../images1/car-1.png')}/>
   
   </div>
   
   <div className="Cards2">

   <Data title="Porche P2 Sport" price="Price: $69,400/-" specs="Convertable Petrol" specs2="295kmph Auto" imgsrc={require('../images1/vehicle-5.png')}/>
   <Data title="Porche Cayenne 3 " price="Price: $38,600/-" specs="AWD  Diesel" specs2="235kmph  8-Gear" imgsrc={require('../images1/vehicle-6.png')}/>
   <Data title="Ferrari Enzo Limt." price="Price: $10,5000/-" specs="Automatic Petrol" specs2="312kmph     Turbo" imgsrc={require('../images1/vehicle-4.png')}/>
   <Data title="Honda Civic S" price="Price: $19,000/-" specs="Manual Petrol" specs2="180kmph  6-Gear" imgsrc={require('../images1/car-6.png')}/>
   </div>

   </div>
   </div>
   
   
   
</>

     );
}

export default Home;
