"use client";
import logo from "../../../public/images/logo.png";
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
import "./p_e.css";
import Enquiry from "../enq/enquiry";

const Pe = () => {
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
                  onClick={() => router.push(`../sustainablity`)}
                >
                  Sustainablity
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

  

        <div className="introheaderp">
          <div className="carddp">
              <p className="pppp">
              PARTNERS & INVESTORS
              </p>
             
            
          </div>
        </div>





        
        <section className="sec3">

            <div className="inner">
            <Image 
              className="imf"
              src={ard}
              alt="Leadership illustration"
              />
            <h2>Partners</h2>
                <p>
                    Lab Partner : University of Calgary & National Research Council.<br></br> <br></br>
                    Funding Partners: We are grateful to funding partners MITACS, Biotalent, IRAP, ERIN to provide non-dilutive grants of $250,000.<br></br> <br></br>
                    Pankaj: We are looking for industry partners to commercialise Brahmola for various edible and  Industrial applications.

                <br></br> <br></br>   
                </p>
            </div>
            <div className="inner">
            <Image 
              className="imf"
                src={pers}
                alt="Leadership illustration"
              />
            <h2>Inversors</h2>
                <p>
                We are looking for pre-seed investment in FLB to undertake field trials to receive Canadian Food Inspection Agency approval and develop further applications of Brahmola.
                <br></br> <br></br>  
                </p>
            </div>

        </section>
        {/* /////////////////////////////////////////for images */}
        <section className="sec3">

            <div className="inner">
            <Image 
              className="imf"
              src={logo}
              alt="Leadership illustration"
              />
            
            </div>
            <div className="inner">
            <Image 
              className="imf"
                src={pers}
                alt="Leadership illustration"
              />
            
            </div>

        </section>

          <div className="info">
            <div className="roww">
              <div className="colll1">
                  <h3>ABOUT US</h3>
                  <p >Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer&apos;s Legacy Biotech.</p>
                  
              </div>
              {/* <div className="colll2">
              <h3>IMPORTANT LINKS</h3>
                  <p>Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.</p>
                 
              </div> */}
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
export default Pe;
















 