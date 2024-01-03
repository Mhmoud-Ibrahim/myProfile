import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import mahmoud from '../assets/Mhmoud.jpg'
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import { Helmet } from "react-helmet";



export default function Home() {


  useEffect(()=>{
    AOS.init({duration:2000})
   },[])
   
  return <>
  <Helmet>
    <title>Home</title>
    <link rel="icon" type="image/svg+xml" href="/m.svg" />
  </Helmet>
  <div data-aos='fade-left' className="container mt-5">
    <div className="row mb-4 mt-4 p-2">
    <div data-aos='fade-in' className="col-md-7">
    <div className="py-5">
    <h2 data-aos= 'fade-left' data-aos-duration="800" className='text-danger'> You are welcom </h2>
    <h3 data-aos='fade-left' data-aos-duration="1200" className="myName">Mahmoud Ibrahim</h3>
    <h2 data-aos='fade-left' data-aos-duration="1600"  className="text-thierd"> Front-end developer React.js <i  className="fab fa-react text-main fa-spin" ></i> </h2>
    <h4 data-aos='fade-left' data-aos-duration="2000" className="text-muted fw-bold" > 
    <Typewriter  words={["I'm Front-end Developer React.js","I am seeking a competitive and challenging environment where I can serve your organization and establish a career for myself and use my experience and education to help the company meet and surpass its goals."]}
     loop={5}
     delaySpeed={1000}
     typeSpeed={70} /></h4>
     
    <br />
    <Link className="btn btn-sm px-3 mb-5 position-absolute bottom-0 ml-5  shadow-sm btn-second " to={'https://drive.google.com/file/d/1aOxfuY2Vr9Wr0W9QJcAEt2ufKxJc_TlG/view?usp=sharing'}>Download CV</Link>
    
    </div>
    </div>
      <div className="col-md-5">
        <div className=" myPic p-4">
        <img data-aos='zoom-out-left' className=" m-auto rounded-2" height={320} src={mahmoud} alt="" />
        </div>
      </div>
    </div>
  </div>
  
  
  
  </>
}
