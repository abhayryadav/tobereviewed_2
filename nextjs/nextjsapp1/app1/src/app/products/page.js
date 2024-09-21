'use client';
import Image from 'next/image';
import milk from "../../../public/images/image1.png";
import oilll from "../../../public/images/image.png";
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
                style={{ fontFamily: "Open Sans", color: "black" }}
              >
                {" "}
                FLB
              </h2>
              <p
                className="cbheading"
                style={{ fontFamily: "Open Sans", color: "grey" }}
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
        {/* <div className="headercontent">
          <h2>Products we are offering</h2>
          <div className="line"></div>
          
          <center>
              <div className="headerproddata">
              <p>
              Seeds: FLB is Plant Breeding company with Brahmola seed as flagship brand. FLB  repurposed Brahmola has optimum characteristics for human consumption and industry requirements. Brahmola&apos;s Saturated fatty acid, Monounsaturated Fatty Acid and Polyunsaturated Fatty Acid is near to WHO recommended ratio of 1:1.3:1 making it ideal oil for human consumption with multiple edible and industrial applications. These numerous applications will able to diversify the current usage and reduce reliance on a few markets for Canola. You want to know more about Brahmola Oil Application. Learn More.
              </p>
            </div>
          </center>
          
        </div> */}
      </div>
        <section className="title">
            <h1>
            Brahmola Application
            </h1>
            <div className="line">

            </div>

        </section>
        
      <div className="row">
            <div className="col">
                <Image  unoptimized src={oilll} className="imggg" alt="Leadership illustration"></Image>
                <h4 className="prodhead">Deep Frying Oil</h4>
               
                  <p className="para1">The deep frying industry typically relies on oils that are high in saturated or medium-chain fatty acids, such as palm oil and coconut oil, or high oleic oils that are rich in monounsaturated fatty acids. While high oleic oils offer a more sustainable and superior solution compared to hydrogenated oils and palm oil, they lack the health benefits provided by regular polyunsaturated fatty acid (PUFA) rich oils and coconut oil. Brahmola addresses this gap by offering the benefits of deep frying while maintaining a healthy fatty acid profile. In accelerated oxidative stability tests, Brahmola has been found to be superior to Cargill's high oleic canola oil, demonstrating its enhanced performance and stability for frying applications.
                  </p>
                 
            </div>
            <div className="col">
                <Image  unoptimized src={milk} className="imggg" alt="Leadership illustration"></Image>
                <h4 className="prodhead">Infant Formula</h4>
                <p className="para2">Brahmola has balanced fatty acid profile and is ideal to be used in Infant formula. Currently, Brahmola has low ratio of linoleic to alpha-linolenic acid of 2.5:1 where as Codex Alimentariuos requires it to be 5:1 to 15:1. FLB Proprietary Blend comprising of 80% Brahmola and 20% other Canadian Oil with balanced SFA, MUFA and PUFA profile and meeting all the requirements in codex alimentarious to be used in infant formula making FLB proprietary blend ideal to replace three or four oils blend currently used in Infant formula. Application of FLB proprietary blend will simplify current practice of using Palm Oil, Sunflower Oil and Soyabean Oil blend. FLB proprietary blend negligible 3-MCPD and GE content is safe for children and keep the consumption levels below safety limits for the infants solely feeding on infant formula.  
                </p>
                
            </div>
            <div className="col">
                <Image  unoptimized src={oilcan} className="imggg" alt="Leadership illustration"></Image>
                <h4 className="prodhead">Cooking Oil</h4>
                <p className="para2">Cooking needs requires oil to be capable of handling different cooking conditions like deep frying, shallow frying, salad dressing etc. There is no single oil available in the market that can be used for all these applications. Currently, nutritionists recommend using oils in rotation for cooking to nourish our body with multiple fatty acids as single oil is not capable of providing all fatty acids required for our body. Using different oils for various applications and use oil in rotation does not solve the challenge of providing balanced fatty acid nourishment to our body as our cooking and eating pattern varies every day. Brahmola, multifunctional oil solve this challenge as Brahmola is designed to handle all cooking conditions with balanced body enriching fatty acids ensuring body get the balanced nutrients irrespective of everyday cooking and eating pattern.
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
                  
                  <h2 className="cprt">Farmer&apos;s Legacy Biotech</h2>
            </div>
          </div>

    </div>
  );
};

// export default hidbeforloginsign(Product);
export default Product;