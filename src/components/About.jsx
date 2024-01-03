
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
export default function About() {
useEffect(()=>{
AOS.init({duration:2000})
},[])
  return <>
  <Helmet>
    <title>About</title>
    <link rel="icon" type="image/svg+xml" href="/m.svg" />
  </Helmet>
       <div className="about mt-4 px-0 mx-0 py-1">
        <div className="container mt-5 ">
        <h3 data-aos="zoom-in-right" className="special-heading ">ABOUT ME</h3>
        <p  data-aos="zoom-in">Know Me More</p>

        <div className="row g-0 mt-3">
        <div className=" col-md-8">
        <h5 className='text-muted '  data-aos="zoom-out-right"  data-aos-duration="800">I'm<span className='text-danger'> Mahmoud Ibrahim,</span>  a Web Developer    </h5>
        <h3 className='text-muted fs-6'>
        <Typewriter  words={[ "I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and  scrambled it to make a type specimen book. Delivering work within time and budget which meets client's requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem Ipsum has been the industry's standardummy text ever when an unknown printer took a galley."]}
        loop={5} typeSpeed={70} />
           </h3>
            </div>
            
            <div className="col-md-4">
                <ul>
                    <li  data-aos="zoom-out-right"  data-aos-duration="1000"><span>Name:</span>Mahmoud Ibrahim</li>
                    <li  data-aos="zoom-out-right"  data-aos-duration="1300"><span>Email:</span><Link to="Mail.to:mahmoudd188@gamil.com">Mahmoudd188@gmail.com</Link></li>
                    <li  data-aos="zoom-out-right"  data-aos-duration="1600"><span>Age:</span> 35</li>
                    <li  data-aos="zoom-out-right"  data-aos-duration="1900"><span>From:</span>Egypt,Cairo</li>
                    <Link className="btn btn-sm px-3 mt-4  shadow-sm btn-second " to={'https://drive.google.com/file/d/1aOxfuY2Vr9Wr0W9QJcAEt2ufKxJc_TlG/view?usp=sharing'}>Download CV</Link>
    
                </ul>
            </div>
        </div>
          <h4 data-aos="zoom-out"  data-aos-duration="1000">My Skills</h4>
         <div className="row g-0 mt-2 mb-5">
          <div className="col-md-6 shadow">
            <div data-aos="zoom-out-right"  data-aos-duration="800">
          <label htmlFor="file1" className='' >web developer </label>
          <div className='d-flex w3-light-grey justify-content-between'>
          <progress className='w3-container w3-red w3-padding w3-center' id='file1' value={75} max={100}></progress>
          <span>75%</span>
          </div>
            </div>
            <div data-aos="zoom-out-right"  data-aos-duration="1200">
          <label htmlFor="file2"><i className='fab fa-html5 text-danger ' ></i></label>
          <div className='d-flex justify-content-between'>
          <progress id='file2' value={95} max={100}></progress>
          <span>95%</span>
          </div>
            </div>
            <div>
          <label htmlFor="file3"><i className='fab fa-css3 text-primary' ></i></label>
          <div className='d-flex   justify-content-between'>
          <progress className='w3-red ' id='file3' value={75} max={100}></progress>
          <span>85%</span>
          </div>
            </div>
          </div>
          <div className="col-md-6 shadow">
            <div data-aos="zoom-out-right"  data-aos-duration="800">
          <label htmlFor="file4" ><i className='fab fa-js text-main bg-dark  '></i></label>
          <div className='d-flex justify-content-between'>
          <progress id='file4' value={85} max={100}></progress>
          <span>85%</span>
          </div>
            </div>
            <div data-aos="zoom-out-right"  data-aos-duration="1200">
          <label htmlFor="file5"><i className='fab fa-react text-info fa-spin'></i></label>
          <div className='d-flex justify-content-between'>
          <progress id='file5' value={80} max={100}></progress>
          <span>80%</span>
          </div>
            </div>
            <div>
          <label htmlFor="file1"><i className='fab fa-github text-secondary bg-warning rounded-circle' ></i>  </label>
          <div className='d-flex justify-content-between'>
          <progress id='file1' value={75} max={100}></progress>
          <span>75%</span>
          </div>
            </div>
          </div>
         </div>        
        </div>
        </div>
  </>
}
