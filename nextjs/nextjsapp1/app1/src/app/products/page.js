'use client';
import Image from 'next/image';
import milk from "../../../public/images/milk.jpg";
import oilll from "../../../public/images/oilll.jpg";
import oilcan from "../../../public/images/oilcan.png";
import { useRouter } from "next/navigation";
import "./products.css";
import Enquiry from "../enq/enquiry";
const Product = () => {

const router=useRouter();
  return (
    <div className="main">
      <Enquiry/>
      <nav className="navbar">
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
        
          <ul >
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
        {/* <Image src={menu} className="menubtn" alt="Menu button" onClick={navtoggle} /> */}
      </nav>
      <div className="header">
        <div className="headercontent">
          <h2>Products we are offering</h2>
          <div className="line"></div>
          {/* <h1>barmohla </h1> */}
          <center>
              <div className="headerproddata">
              <p>
              Seeds: FLB is Plant Breeding company with Brahmola seed as flagship brand. FLB  repurposed Brahmola has optimum characteristics for human consumption and industry requirements. Brahmola&apos;s Saturated fatty acid, Monounsaturated Fatty Acid and Polyunsaturated Fatty Acid is near to WHO recommended ratio of 1:1.3:1 making it ideal oil for human consumption with multiple edible and industrial applications. These numerous applications will able to diversify the current usage and reduce reliance on a few markets for Canola. You want to know more about Brahmola Oil Application. Learn More.
              </p>
            </div>
          </center>
          
        </div>
      </div>
        <section className="title">
            <h1>
                Current Products
            </h1>
            <div className="line">

            </div>

        </section>
        
      <div className="row">
            <div className="col">
                <Image  unoptimized src={oilll} className="imggg" alt="Leadership illustration"></Image>
                <h4 className="prodhead">Frying Oil</h4>
               
                  <p className="para1">Brahmola balanced SFA, MUFA and PUFA profile and resistant against oxidation make it suitable for deep frying application.
                  </p>
                  <p className="para1">Brahmola is healthy deep frying Oil. You do not need to compromise on oil quality for good taste.
                  </p>
                
                
            </div>
            <div className="col">
                <Image  unoptimized src={milk} className="imggg" alt="Leadership illustration"></Image>
                <h4 className="prodhead">Infant Formula</h4>
                <p className="para2">FLB Proprietary Blend comprising of 80% Brahmola and 20% other Canadian Oil with  balanced SFA, MUFA and PUFA profile make it ideal Oil to be used for Infant formula Application simplifying current practice of using Palm Oil, Sunflower Oil and Soyabean Oil blend.  
                </p>
                <p className="para2">FLB proprietary Blend negligible 3-MCPD and GE content is safe for children and keep the consumption level below safety limits for the infants solely feeding on infant.
                </p>
            </div>
            <div className="col">
                <Image  unoptimized src={oilcan} className="imggg" alt="Leadership illustration"></Image>
                <h4 className="prodhead">Cooking Oil</h4>
                <p className="para2">Brahmola ideal combination of fatty acids makes it a go to choice for the healthy cooking application and available in retails as Healthy Cooking Oil.  
                </p>
                
            </div>
            
        </div>


            <div className="info">
            <div className="roww">
              <div className="colll1">
                  <h3>ABOUT US</h3>
                  <p >Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer&apos;s Legacy Biotech.</p>
                  
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
  );
};

// export default hidbeforloginsign(Product);
export default Product;