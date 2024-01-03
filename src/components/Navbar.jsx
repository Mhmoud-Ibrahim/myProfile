import { useEffect } from "react"
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {



  useEffect(()=>{
    AOS.init({duration:2000})
    },[])
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-second fixed-top py-0  shadow">
  <div      className="container">
    <Link data-aos="zoom-out-right" className="navbar-brand " to="/">Mahmoud</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav  m-auto">
        <li  data-aos="fade-down"    data-aos-duration="500" className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li  data-aos="fade-down"       className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
        <li  data-aos="fade-down"    data-aos-duration="1100" className="nav-item">
          <Link className="nav-link" to="myProjects">MyProjects</Link>
        </li>
        <li   data-aos="fade-down"    data-aos-duration="1700" className="nav-item">
          <Link className="nav-link" to="picture">Pictures</Link>
        </li>
      
        <li  data-aos="fade-down"    data-aos-duration="2000" className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
       
      
        
      </ul>

      <ul className="navbar-nav social me-auto">
      <li  data-aos="fade-down"    data-aos-duration="800" className="nav-item">
          <Link className="nav-link" to="https://www.linkedin.com/in/mahmoud-ibrahim-front-end-developer-0261bb22a/"> 
          <i className="fab fa-linkedin " ></i>  </Link>
        </li>
      <li  data-aos="fade-down"    data-aos-duration="1200" className="nav-item">
          <Link className="nav-link" to="https://github.com/Mhmoud-Ibrahim"> 
          <i className="fab fa-github" ></i>  </Link>
        </li>
      <li  data-aos="fade-down"    data-aos-duration="1600" className="nav-item">
          <Link className="nav-link" to="https://drive.google.com/file/d/1aOxfuY2Vr9Wr0W9QJcAEt2ufKxJc_TlG/view?usp=drive_link"> 
          <i className="fab fa-google " ></i>  </Link>
        </li>
      <li  data-aos="fade-down"    data-aos-duration="2000" className="nav-item">
          <Link className="nav-link" to="https://wa.me/01278576173"> 
          <i className="fab fa-whatsapp  " ></i>  </Link>
        </li>
      <li  data-aos="fade-down"    data-aos-duration="2000" className="nav-item">
          <Link className="nav-link" to="tel:01278576173"> 
          <i className="fas fa-phone  " ></i>  </Link>
        </li>
      </ul>


    </div>
  </div>
</nav>
  </>
}
