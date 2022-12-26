
import Menubar from './Menubar';
import Home from './Home';
import Services from './Services';
import Features from './Features';
import Contacts from './Contacts';
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Checkout from './Checkout';
import MyComponent from './UseRef';
import { Component } from 'react';
import ServiceCard from './ServiceCard';
import Effect from './UseRef';






function App() {
  return (
  
    <>
    {/* <Effect/> */}
   {/* <Services/> */}
    

    <Menubar/>

     <Routes>
     
         <Route path="/" element={ <Home /> } />
        <Route path="/Services" element={ <Services /> } />
        <Route path="/Features" element={ <Features /> } />
        <Route path="/Contacts" element={ <Contacts /> } />
        <Route path="/Login" element={ <Login /> } />
        <Route path="/Signup" element={ <Signup /> } />
        <Route path="/checkout" element={ <Checkout /> } />
       
      </Routes>
      
   
    </>
    
  );

}

export default App;
