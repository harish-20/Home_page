import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Subsection1 from "./components/Subsection1";
import Subsection2 from "./components/Subsection2";
import Subsection3 from "./components/Subsection3";
import Subsection4 from "./components/Subsection4";
// import {
  
//   Routes,
//   Route

// } from "react-router-dom";
import "./index.scss";

const App = () => (
  
   <div>
        <Navbar/>
        <Section1/>
        <Section2/>
         <Section3/>
         <Subsection1/>
         {/* <Routes>
         <Route exact path="/sub1" element={<Subsection1/> }/>
         <Route exact path="/sub2" element={<Subsection2/> }/>
         <Route exact path="/sub3" element={<Subsection3/> }/>
         <Route exact path="/sub4" element={<Subsection4/> }/>
         </Routes> */}
         <Footer/>
        
       
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
