import { useState,useEffect} from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Menubar.css";



const Features = () => {

     const [quantity,setQuantity] = useState(1);
     const [quantity1,setQuantity1] = useState(1);

    

    return ( 
        <>
        

         <div className='featured'>
            <h1 className="heading" style={{marginTop:"2rem"}}><span>Features</span> Cars</h1>

            <div className=" swiper featured-slider">

                <div className="swiper-wrapper">

                    <div className="box">
                    <img  src={require('../images1/car-1.png')}/>
                    <h3>Mercedies Benz SLS</h3>

                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaRegStar/></i>
                    </div>
                    <button onClick={()=>setQuantity(quantity+1)}>+</button>
                    <button>{quantity}</button>
                    <button onClick={()=>setQuantity(quantity-1)}>-</button>
                    <div className="price">Price: $67,000/-</div>
                    <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.2rem",
                    fontWeight:"500",borderRadius:".2rem",}} >Check Out</button> </Link>
                    </div>

                    

                    <div className="box">
                    <img  src={require('../images1/car-3.png')}/>
                    <h3>Ford F15 S</h3>

                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaRegStar/></i>
                    </div>
                    <button onClick={()=>setQuantity1(quantity1+1)}>+</button>
                    <button>{quantity1}</button>
                    <button onClick={()=>setQuantity1(quantity1+1)}>-</button>
                    <div className="price">Price: $30,000/-</div>
                    <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}} >Check Out</button> </Link>
                    </div>

                    <div className="box">
                    <img  src={require('../images1/vehicle-3.png')}/>
                    <h3>Porche Panaroma</h3>

                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaRegStar/></i>
                    </div>
                    <button onClick={()=>setQuantity(quantity+1)}>+</button>
                    <button>{quantity}</button>
                    <button onClick={()=>setQuantity(quantity-1)}>-</button>
                    <div className="price">Price: $43,000/-</div>
                    <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}} >Check Out</button> </Link>
                    </div>

                    <div className="box">
                    <img  src={require('../images1/car-4.png')}/>
                    <h3>Audi Q7</h3>

                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaRegStar/></i>
                    </div>
                    <div className="price">Price: $49,000/-</div>
                    <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}} >Check Out</button> </Link>
                    </div>

                    <div className="box">
                    <img  src={require('../images1/vehicle-5.png')}/>
                    <h3>Porche P2 Sport</h3>

                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaRegStar/></i>
                    </div>
                    <div className="price">Price: $69,400/-</div>
                    <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}} >Check Out</button> </Link>
                    </div>

                    

                    <div className="box">
                    <img  src={require('../images1/car-7.png')}/>
                    <h3>KIA Glory</h3>

                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaRegStar/></i>
                    </div>
                    <div className="price">Price: $27,000</div>
                    <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}} >Check Out</button> </Link>
                    </div>

                    
                </div>
                <div className="swiper-pagination"></div>
            </div>

            <div className="featured-slider">

                <div className="wrapper">

                    <div className="box">
                    <img  src={require('../images1/car-2.png')}/>
                    <h3>MG HS</h3>

                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaRegStar/></i>
                    </div>
                    <div className="price">Price: $28,000/-</div>
                    <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}} >Check Out</button> </Link>
                    </div>

                    <div className="box">
                    <img  src={require('../images1/car-5.png')}/>
                    <h3>Kia Sportage</h3>

                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaRegStar/></i>
                    </div>
                    <div className="price">Price: $31,000</div>
                    <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}} >Check Out</button> </Link>
                    </div>

                    <div className="box">
                    <img  src={require('../images1/car-6.png')}/>
                    <h3>Honda Civic RS</h3>

                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaRegStar/></i>
                    </div>
                    <div className="price">Price: $15,000/-</div>
                    <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}} >Check Out</button> </Link>
                    </div>

                    <div className="box">
                    <img  src={require('../images1/vehicle-4.png')}/>
                    <h3>Ferrari Enzo GT</h3>

                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaRegStar/></i>
                    </div>
                    <div className="price">Price: $105,000/-</div>
                    <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}} >Check Out</button> </Link>
                    </div>

                    <div className="box">
                    <img  src={require('../images1/car-8.png')}/>
                    <h3>Chervolet SUV</h3>

                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaRegStar/></i>
                    </div>
                    <div className="price">Price: $23,000/-</div>
                    <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}} >Check Out</button> </Link>
                    </div>

                    
                    <div className="box">
                    <img  src={require('../images1/vehicle-2.png')}/>
                    <h3>Porche Tycan</h3>

                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaRegStar/></i>
                    </div>
                    <div className="price">Price: $43,000/-</div>
                    <Link className='Checkout' to="/checkout"><button className="Cbtn" style={{color:"white",background:"rgb(6, 123, 240)",border:"none", fontSize:"1.3rem",fontWeight:"600",borderRadius:".2rem"}} >Check Out</button> </Link>
                    </div>

                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div> 

        <div className="newletter">
            <h3>Loading more!</h3>

        </div>

        
        </>
     );
}

export default Features;