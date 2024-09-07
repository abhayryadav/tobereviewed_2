"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import conimg from "../../../public/images/conimg.png";
import dmss from "../../../public/images/dmss.png";
import "./team.css";
import Enquiry from "../enq/enquiry";

const Team = () => {
  const router = useRouter();

  // State variables for toggling the visibility of text
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  // Toggle functions
  const toggleShowMore1 = () => setShowMore1(!showMore1);
  const toggleShowMore2 = () => setShowMore2(!showMore2);

  return (
    <div className="main">
        <Enquiry/>
      <div className="nav">
        <div className="divhomemain">
          <div className="divhome2" id="inner2">
            <h2 className="cheading" style={{ fontFamily: "Open Sans", color: "white" }}>
            FLB
            </h2>
            <p className="cbheading" style={{ fontFamily: "Open Sans", color: "white" }}>
            Farmer Legacy  Biotech
            </p>
          </div>
          <ul className="ulhometopt">
            <li>
              <button className="btonhome" onClick={() => router.push("/")}>
                Home
              </button>
            </li>
            <li>
              <button className="btonhome" onClick={() => router.push("../about2")}>
                About
              </button>
            </li>
            <li>
              <button className="btonhome" onClick={() => router.push(`../products`)}>
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
              <button className="btonhome" onClick={() => router.push(`../innovation`)}>
                Innovation
              </button>
            </li>
            <li>
              <button className="btonhome" onClick={() => router.push(`../p_e`)}>
                Partners & investors
              </button>
            </li>
            
          </ul>
        </div>
      </div>

      <div className="introheaders">
        <div className="cardds">
          <p className="ppps">TEAM</p>
        </div>
      </div>

     

<section className="sec2">
      <div className={`inner1 ${showMore1 ? "expanded" : ""}`}>
        <Image unoptimized className="im" src={dmss} alt="Leadership illustration" />
        <h2>Dr. Marcus Samuel</h2>
        {showMore1 ? (
          <p>
           Dr. Marcus Samuel is Professor in Department of Biological Sciences & Academic Director of the Greenhouse, at Integrative Cell Biology (Plant Biology), University of Calgary and CSO of AgGene.  He is Co-founder and Partner with Farmer&apos;s Legacy Biotech. Dr. Samuel leads Plant Transformation and Partnership Development on Breeding side of FLB&apos;s Business.
            <br /> <br />
            <button className="btnn" onClick={toggleShowMore1}>Show Less</button>
          </p>
        ) : (
          <button className="btnn" onClick={toggleShowMore1}>Show More</button>
        )}
      </div>

      <div className={`inner2 ${showMore2 ? "expanded" : " "}`}>
        <Image unoptimized className="im" src={conimg} alt="Leadership illustration"/>
        <h2>Pankaj Purwar</h2>
        {showMore2 ? (
          <p>
            Pankaj Purwar is co-founder and CEO of Farmer&apos;s Legacy Biotech. Pankaj Purwar  has completed Bachelor in Chemical Technology from Harcourt Butler Technological Institute and MBA in Entrepreneurship from University of Victoria. Pankaj has worked for 7 years in multinationals as Marico and Unilever in Process and Product Development. Pankaj leads technology commercialization, fund raising, partnerships and Business development initiative for Farmer&apos;s Legacy Biotech.
            <br /> <br />
            <button className="btnn" onClick={toggleShowMore2}>Show Less</button>
          </p>
        ) : (
          <button className="btnn" onClick={toggleShowMore2}>Show More</button>
        )}
      </div>
    </section>

    <section className="hed144">
        <h2 style={{ color: "rgb(66, 66, 66)"  }}>
        FLB has a team with right talent. FLB fractional resource model allows FLB using world class resources on sharing basis to keep operational cost low. Our team comprises expertise from Biotechnology, Agriculture, Edible Oil processing and application, and Product Commercialisation. The co-founding members Dr. Marcus Samuel and Pankaj Purwar holds MBAs and PHDs from prestigious universities with varied experience ranging from academia, R&D and Industry. We have technical advisors with vast experience in setting technology start-ups.
        </h2>
      </section>



      {/* <section className="hed145">
        <h1 style={{ color: "rgb(66, 66, 66)"  }}> where we are</h1>
        <h2 style={{ color: "rgb(66, 66, 66)"  }}>
        Farmer&apos;s Legacy Biotech (FLB) has successfully raised $250K for seed development. We are currently in the process of raising a total of $500K, with $250K contributed by investors and an additional $250K from government funding. In $500k- $200K for seed commercialization: This involves obtaining approval from the Canadian Food Inspection Agency (CFIA), with the Industrial Research Assistance Program (IRAP) already committing $100K towards this effort.$200K for product development: This will support the development of multiple applications of Brahmola, backed by relevant data and experimental results.$100K for product marketing: This funding will be used to promote Brahmola and its applications
        </h2>
      </section> */}














      <div className="info">
        <div className="roww">
          <div className="colll1">
            <h3>ABOUT US</h3>
            <p>
              Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer&rsquo;s Legacy Biotech.
            </p>
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
        <div className="linee"></div>
        <div className="copyright">
          <h2 className="cprt1">Copyright by </h2>
          <h2 className="cprt">Canadian Legacy Biotech</h2>
        </div>
      </div>
    </div>
  );
};

export default Team;
