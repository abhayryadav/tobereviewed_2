"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import leadership from "../../../public/images/leadership.png"
import empathy from "../../../public/images/Empathy.webp"
import ard from "../../../public/images/ard.webp"
import pers from "../../../public/images/pers.webp"
import Enquiry from "../enq/enquiry";
import "./about2.css";

const vision = () => {
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

  

        <div className="introheadera">
          <div className="cardda">
              <p className="pppa">
             VISION
              </p>
        
            
          </div>
        </div>

        <section className="hed12">
            <p style={{color:"rgb(66,66,66)"}}>Our values define our actions, and we lead by LEAP. LEAP stands for leadership, empathy, ardent, and persistence. We will work as a leader and create winning situations for all the stakeholders involved in the business. As a plant Breeding company, our projects shall benefit all our partners alike. Our goal is to be aware of our surroundings and empathize with the people who face challenges but unable to find solution to their current woes. We will help those people find the solution to their problems for the betterment of society. We will be persistent in our approach. We will see challenges as a steppingstone and work toward our goal making failure non-permanent. </p>
        </section>

        <section className="sec2ab">

            <div className="innerab">
              <Image 
              unoptimized
              className="imab"
                src={leadership}
                alt="Leadership illustration"
              />
                <h2>Leadership</h2>
                <p>
                (1)	Take results personally and strive to drive the change.<br></br>
                (2)	Commit to the highest standard of work.<br></br>
                (3)	Engage in addressing the challenges rather than retreating from it.<br></br>
                (4)	Experiment with action in the face of uncertainty.<br></br>
                (5)	Focus on the big picture.<br></br>

                </p>
            </div>
            <div className="innerab">
              <Image 
              unoptimized
              className="imab"
              src={empathy}
              alt="Leadership illustration"
              />
            <h2>Empathy</h2>
            <p>
                (1)	Understand the pain points and desire to solve them.<br></br>
                (2)	Build a workplace with diverse skills and talent.<br></br>
                (3)	Empower stakeholders and partners to make decisions based on what they know.<br></br>
                (4)	Flexible thought and flexible approach to partnering, help, and collaboration.<br></br>
                (5)	Make everyone a partner in the organization&apos;s success.<br></br>
</p>
            </div>

        </section>
        <section className="sec3ab">

            <div className="innerab">
            <Image 
            unoptimized
              className="imab"
              src={ard}
              alt="Leadership illustration"
              />
            <h2>Ardent</h2>
                <p>
                (1)	Shape a vision to help steer the change effort and develop strategic initiatives to achieve it.<br></br>
                (2)	Be ready, willing, and urgent to drive change.<br></br>
                (3)	Direct energy towards the most important goals rather than spread it to various options.<br></br>
                (4)	Remove obstacles to change and change systems for the achievement of the vision.<br></br>
                (5)	Strive hard to consistently meeting or exceeding expectations.<br></br>

                </p>
            </div>
            <div className="innerab">
            <Image 
            unoptimized
              className="imab"
                src={pers}
                alt="Leadership illustration"
              />
            <h2>Persistent</h2>
                <p>
                (1)	Be resilient in the face of challenges and uncertainty.<br></br>
                (2)	Consistently produce, track, evaluate, and celebrate small and large accomplishments.<br></br>
                (3)	Generate practical and systematic approaches rather than being scattered or Adhoc.<br></br>
                (4)	Focus on achieving outcomes unfazed by failures.<br></br>
                (5)	Keep track of deliverables from every stakeholder.<br></br>

                </p>
            </div>

        </section>

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
    )
}  
export default vision;
















 