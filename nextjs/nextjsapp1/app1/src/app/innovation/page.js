"use client";
import Image from "next/image";

//import like down here when ---------x
// import {hidbeforloginsign} from "../privatecomponentviaHOC/privcomphoc";
//---------x exported like down here in file - /privatecomponentviaHOC/privcomphoc
// const x=function(){
//   console.log("x")
// }
// export {hidbeforloginsign,x}

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import leadership from "../../../public/images/leadership.png"
import empathy from "../../../public/images/Empathy.webp"
import ard from "../../../public/images/ard.webp"
import pers from "../../../public/images/pers.webp"
import Link from "next/link";
import "./innov.css";
import Enquiry from "../enq/enquiry";

const Innovation = () => {
    const router = useRouter();
    return(
        <div className="main">
          <Enquiry/>
        <div className="nav">
          <div className="divhomemain">
            <div className="divhome2" id="inner2">
              <h2
                className="cheading"
                style={{ fontFamily: "Open Sans", color: "white" }}
              >
                {" "}
                FLB
              </h2>
              <p
                className="cbheading"
                style={{ fontFamily: "Open Sans", color: "white" }}
              >
                {" "}
                Farmer Legacy  Biotech{" "}
              </p>
            </div>
            <ul className="ulhometopi">
            <li>
                <button
                  className="btonhome"
                  onClick={() => router.push("/")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="btonhome"
                  onClick={() => router.push("../about2")}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="btonhome"
                  onClick={() => router.push(`../products`)}
                >
                  Products
                </button>
              </li>
              
              <li>
                <button
                  className="btonhome"
                  onClick={() => router.push(`../sustainablity`)}
                >
                  Sustainablity
                </button>
              </li>
              <li>
                <button
                  className="btonhome"
                  onClick={() => router.push(`../p_e`)}
                >
                  Partners & investors
                </button>
              </li>
              
              
              <li>
                <button
                  className="btonhome"
                  onClick={() => router.push(`../team`)}
                >
                  Team
                </button>
              </li>
              
            </ul>
          </div>
        </div>

  

        <div className="introheaderi">
          <div className="carddi">
              <p className="pppi">
              INNOVATION
              </p>
           
            
          </div>
        </div>

      

            <section className="sec11">

              <div className="innerr">
                <Image 
                unoptimized
                className="imm"
                src={ard}
                alt="Leadership illustration"
                
                />
                  <p>
                  We firmly believe that Innovation requires keen observation of people&rsquo;s behavior under a variety of circumstances. We are curious individuals who empathize with people&rsquo;s behavior with thoughtful analysis, critical thinking, and problem framing to objectively define challenges and solutions. We characterize challenges through various lenses and create business opportunities that are realistic and achievable with novel technologies.
                  <br></br> <br></br>  We are modifying the existing products that can increase the use of these products for various applications in addition to existing consumption patterns. We want to reimagine agriculture with products that can cater to the needs of Canadian farmers and businesses. We will innovate products and markets for Canadian farm products and reduce the dependencies of Canadian farm products in a few markets.
                  <br></br> <br></br>  Consumer Products Industry faces a &quot;Health vs. Availability&quot; dilemma, with availability often prioritized over health and sustainability to drive profits. The industry uses oil blends when healthy oils are a prerequisite in applications such as infant formula, with no innovation aimed at achieving &quot;Healthy, Sustainable, and Available&quot; together. For example, High Oleic Canola oil has compromised Canola&rsquo;s sustainability and health benefits, particularly for frying applications. Similarly, the introduction of palm oil has diminished the health benefits of coconut oil in various food products. Farmer&rsquo;s Legacy Biotech (FLB) innovative approach has developed the Brahmola seed, which features a balanced fatty acid profile with multiple edible and industrial applications, making it possible to achieve &quot;Availability, Health, and Sustainability&quot; simultaneously. 
                  </p>
              </div>
            </section>


          <div className="info">
            <div className="roww">
              <div className="colll1">
                  <h3>ABOUT US</h3>
                  <p >Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer&rsquo;s Legacy Biotech.</p>
                  
              </div>
              
              <div className="colll3">
              <h3>GET IN TOUCH</h3>
              <div>
                <p>info@farmerlegacybiotech.com</p>
              </div>
              <div>
              <p>+1 (250) 891-6663</p>
              </div>
                  
                  
              </div>
            </div>
            <div className="linee">

            </div>
            <div className="copyright">
                  <h2 className="cprt1">Copyright by </h2> 
                  
                  <h2 className="cprt">Canadian Legacy Biotech</h2>
            </div>
          </div>
</div> 
    )
}  
export default Innovation;
















 