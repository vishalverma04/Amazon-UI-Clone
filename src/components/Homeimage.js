import React from 'react'
import "./Homeimage.css"

import SimpleImageSlider from "react-simple-image-slider";

function Homeimage() {


    let arrimg=[
      {url:  "https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/MayART23/GW/GW_HERO-PC_PEA_V1_2X._CB590992786_.jpg"},
      {url:    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/ATF/revised/new/Skincare-Herofader-PC._CB594538667_.jpg"},
      {url:   "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/APRILGTM/2023/Recharge_PC_Hero_3000x1200_2_rev._CB590565455_.jpg"},
      {url:  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/2023/Q2/PC_Hero_VG_BAU_Consoles_Apr1st-week_Unrec_2x._CB592233658_.jpg"},
      {url:   "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopHeroTemplate_3000x1200v3._CB592770274_.jpg"}
       
       ]
       let w=1300;
       let base=window.innerWidth;
       if(base>1200){
   w=base;
   }  
       
 return (
    <div className='home-img'>
 <SimpleImageSlider 
        width={w}
        height={480}
        images={arrimg}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}

export default Homeimage

