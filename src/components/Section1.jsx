import React from 'react'

const Section1=()=> {
  return (
    <div className=' container ' style={{width:"100%", height:"315px",marginTop:"4%",background:" url(https://img1a.flixcart.com/fk-sp-static/images/Welcome_potal_banner_Desktop_v2_july_2022.svg)", backgroundRepeat:"no-repeat", backgroundSize:"100% "}}>
      
  <form class="w-full max-w-sm pt-8">
  <div class="md:flex md:items-center mb-6">
   
    <div class="md:w-2/3 m" style={{margin:"20px",marginLeft:"150px"}}>
    <div className=' text-2xl mb-5 font-semibold ' style={{color:"white"}}>Launch your business in 10 minutes</div>
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Enter 10 digit mobile number" style={{width:"300px"}}/>
      <button class="shadow  bg-yellow-500 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded border-2" type="button" style={{marginTop:"20px",borderColor:"black",width:"200px"}}>
        Start Selling 
      </button>
    </div>
  </div>
 
</form>
  
    </div>
  )
}

export default Section1
