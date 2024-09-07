"use client";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import calg from "../../../public/images/calg.png"

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
            unoptimized
              className="imf"
              src={ard}
              alt="Leadership illustration"
              />
            <h2>Partners</h2>
                <p>
                Brahmola is result of partnership among Farmer&apos;s Legacy Biotech, University of Calgary and National Research Council. FLB is partnering with Academia, Industry and Government to commercialize Brahmola . As we move forward we are looking for partners that bring further expertise in plant breeding, seed multiplication, seed marketing and commercialization. We are committed to be transparent in dealing with our partners and share the created value as per the contribution.

                <br></br> <br></br>   
                </p>
            </div>
            <div className="inner">
            <Image 
            unoptimized
              className="imf"
                src={pers}
                alt="Leadership illustration"
              />
            <h2>Investors</h2>
                <p>
                FLB has survived on Friends and Family round from 2021 to 2024. FLB has raised  F&F round and non-dilutive grants from the government to support last three years of its operations. We are thankful to friends, family and government helps FLB creating positive change in the world. FLB is looking for Pre-seed Investment from Angel Investors or Venture Capitalist firm who share similar values to FLB.
                <br></br> <br></br>  
                </p>
            </div>

        </section>
        {/* /////////////////////////////////////////for images */}
        <section className="sec3">

            <div className="innerc">
            <Image 
            unoptimized
              className="imfc"
              src={calg}
              alt="Leadership illustration"
              />
            
            </div>
            {/* <div className="inner">
            <Image 
            unoptimized
              className="imf"
                src={pers}
                alt="Leadership illustration"
              />
            
            </div> */}

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
















 