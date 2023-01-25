import React from 'react'
import Section1 from './Section1'

const Navbar=()=> {
  return (
       <div className='fixed z-0 flex-row bg-white' style={{ top:"0px",width:"100%", WebkitBoxAlign:"center", alignItems:"center", WebkitBoxPack:"justify", justifyContent:"space-between", boxSizing:"inherit", fontSize:"12px", fontFamily:"sans-serif"}}>
        <div className='flex' style={{ padding:"10px 20px", boxSizing:"inherit", fontSize:"12px"}} >
            < a href='#'>
            <img classname=
        ' image'src='https://static-assets-web.flixcart.com/fk-sp-static/images/fk-logo-pre-login-v3.svg' style={{boxSizing:"inherit",height:"45px",width:"130px" }}></img>
            </a>
            <ul className='u' style={{display:"flex", margin:"auto 30px",fontSize:"15px"}} >
                <li className='mx-9  cursor-pointer'></li>
                <li className='mx-2  my-2 cursor-pointer'>Fee structure</li>
                <li className='mx-2  my-2 cursor-pointer'> Setvices</li>
                <li className='mx-2  my-2 cursor-pointer'>Resources</li>
                <li className='mx-2  my-2 cursor-pointer'>FAQs</li> 
            </ul>
       
        <div className=' flex bg-white cursor-pointer' style={{justifyContent:"end",marginLeft:"650px"}}>
            <div className=' block '>
                <button className='flex align-middle justify-center  text-black bg-yellow-500 border-yellow-500 text-center  font-15px  border-8 border-t-4 mx-3' style={{ borderRadius:"6px", boxShadow:"dark",height:"90%",width:"100%" , fontSize:"15px", justifyContent:"center" , alignContent:"baseline", paddingTop:"5px"}}>Start selling</button>
            </div>
            <div className=' block '>
                <button className='flex align-middle justify-center w-20 h-15 text-black  bg-blue-600 border-blue-600 text-center  font-15px  border-8 mx-8' style={{ borderRadius:"6px", boxShadow:"dark",color:"white",height:"90%",width:"100%", fontSize:"15px", paddingTop:"2px" }}>Login</button>
            </div>
        </div>
        </div>
        
       

        </div>
        
  )
}

export default Navbar
