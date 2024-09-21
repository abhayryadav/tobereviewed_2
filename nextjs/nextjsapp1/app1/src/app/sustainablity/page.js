"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";
import cf from "../../../public/images/cf.jpg"
import hc from "../../../public/images/hc.jpg"
import hg from "../../../public/images/hg.jpg"
import "./sus.css";
import Enquiry from "../enq/enquiry";

const Sustainablity = () => {
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
            <ul className="ulhometop">
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
                  onClick={() => router.push(`../innovation`)}
                >
                  Innovation
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

  

        <div className="introheaders">
          <div className="cardds">
              <p className="ppps">
              SUSTAINABLITY
              </p>
             
            
          </div>
        </div>

        {/* <section className="hed14">
            <p className="pgf"style={{color:"rgb(66, 66, 66)"}}>Canadian Legacy Biotech believes in developing technology for Planet, People, & Profit. We excel by challenging ourselves and by promoting human curiosity.</p>
        </section> */}




     
        <section className="sec2ss">

            <div className="inner1ss">
              <Image 
              unoptimized
              className="imss"
                src={cf}
                alt="Leadership illustration"
              />
                <h2>Impact on Canadian Farmers</h2>
                <p>
                Farmer&apos;s harvest cycle depends on the rotation of the crop, and Canola is known to positively impact the health of other crops and the farm. Limited Canola application and competition from Australian and Ukrainian Canola has put pressure on Canadian Canola and reduced profitability of Canadian farmers. For sustainability of Canadian Farms and Canola farming, diversification is prerequisite and Brahmola with multiple edible and industrial applications will able to support the growth of Canola industry and maintain the health of Canadian Farm.
                <br></br> <br></br>  
                </p>
            </div>
            <div className="inner2ss">
              <Image 
              unoptimized
              className="imss"
              src={hc}
              alt="Leadership illustration"
              />
            <h2>Impact on Consumers</h2>
                <p>
                Consumers do not know what they are consuming and what is good for their health and the environment. It is responsibility of product designer and industry to design product considering consumer and environment health first than the profits. 50% of the supermarket products use unhealthy and unsustainable palm oil and hydrogenated oil and most of the time consumer is unaware of those ingredients present in their basic snacks or even coffee creamer. FLB has created Brahmola with healthy fatty acid profile that will be grown sustainably in Canada without impacting environment and biodiversity and will be healthy for consumers and the environment. FLB would like to replace palm oil from as many supermarkets product as possible to provide both health and taste to the consumers. FLB goal is to replace multiple oil blend in Infant formula to remove toxic compounds like 3-MCPD and GE that can accumulate in Infants relying solely on Infant formula at danger levels resulting in health complications. Deep fried snacks can be made healthy by frying in w-3 and w-6 rich Brahmola oil.
                 <br></br> <br></br>  
                </p>
            </div>
            <div className="inner3ss">
              <Image 
              unoptimized
              className="imss"
                src={hg}
                alt="Leadership illustration"
              />
                <h2>Impact on Forthcoming Generations</h2>
                <p>
                Canola plant is one of the most flexible bioreactors and no chemical processes can shorten the fatty acid chain except Canola plant. FLB innovative Canola bioreactors pave the sustainable pathway for shortening the fatty acid without relying on high temperature cracking reactors. Introduction of MCFA will pave the way for using Brahmola in other industries that are relying on petroleum industry. When consumption pattern has changed new generation needs new sustainable ways to support necessities without causing adverse impact in environment. Brahmola is right foot forward to revolutionize the Consumer Product Industry and make it more sustainable for forthcoming generations.<br></br> <br></br>  
                </p>
            </div>

        </section>
       

          <div className="info">
            <div className="roww">
              <div className="colll1">
                  <h3>ABOUT US</h3>
                  <p >Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.</p>
                  
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
                  
                  <h2 className="cprt">Farmer&apos;s Legacy Biotech</h2>
            </div>
          </div>
</div> 
    )
}  
export default Sustainablity;
















 