import React from 'react'

const Footer=()=> {
  return (
    <div className='flex flex-col min-h-screen  ' style={{background:"rgb(51,146,243)",color:"rgb(255,255,255",
    font:"12px",fontFamily:"open Sans",  }} >
      <div className="flex mt-auto " style={{margin:"0px 5%",fontSize:"14px"}}>
          <div className="flex" style={{width:"40%", boxSizing:'inherit',fontSize:"14px",color:"rgb(255,255,255"}}>
            <ul style={{margin:"30px 5px", width:"50%",padding:"0",boxSizing:"inherit"}}>
              <li><b>Services</b></li>
             <li>Account Management</li>
             <li>Fulfillment Services</li>
             <li>Partner Services</li>
             <li>Packaging Services</li>
            </ul>
            <ul style={{margin:"30px 5px", width:"50%",padding:"0",boxSizing:"inherit"}}>
              <li><b>Resources</b></li>
             <li>Online Selling Guide</li>
             <li>Products in Demand</li>
             <li>Success Stories</li>
             <li>Seller Learning Center</li>
             <li>News</li>
             <li>API Documentation</li>
             


            </ul>
          </div>
          <div className="flex" style={{width:"40%", boxSizing:'inherit',fontSize:"14px",color:"rgb(255,255,255"}}>
            <ul style={{margin:"30px 5px", width:"50%",padding:"0",boxSizing:"inherit"}}>
              <li><b>FAQs</b></li>
             <li>General</li>
             <li>Fees and Charges</li>
             <li>Managing Your Account</li>
             <li>Service and Fulfillment by Flipkart </li>
            </ul>
            <ul style={{margin:"30px 5px", width:"50%",padding:"0",boxSizing:"inherit"}}>
              <li>Contact us</li>
             <li>sell@Flipkart</li>
             
             


            </ul>
          </div>
          <div className="flex" style={{width:"40%", boxSizing:'inherit',fontSize:"14px",color:"rgb(255,255,255"}}>
            <ul style={{margin:"30px 5px", width:"50%",padding:"0",boxSizing:"inherit"}}>
              <li>SITEMAP</li>
             
            </ul>
            <ul style={{margin:"30px 5px", width:"50%",padding:"0",boxSizing:"inherit"}}>
              <li>Download Our App</li>
             <li><img src="https://static-assets-web.flixcart.com/fk-sp-static/images/apple_store.png" alt="" /></li>
             <li><img src="https://static-assets-web.flixcart.com/fk-sp-static/images/play_store.png" alt="" /></li>
            
             


            </ul>
          </div>
          </div>
          <div className="" style={{justifyContent:"space-between",backgroundColor:"rgb(51,146,243", boxSizing:"inherit",fontSize:"12px",fontFamily:"sans-serif",margin:"0px 80px"}}>
            <div className="flex" style={{margin:"20px 20px",boxSizing:"inherit"}}>
            <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/fk-logo-pre-login-v3.svg" alt="Flipkart Logo" class="styles__LogoImage-huhbis-11 kZiAwr"/>
            <span style={{margin:"0px 20px",boxSizing:"inherit",fontSize:"12px",fontFamily:"sans-serif",margin:"0px 400px"}}>
            ©2023 Flipcart.allrights reserved

            </span>
            </div>
         

          </div>

      
    </div>
  )
}

export default Footer
