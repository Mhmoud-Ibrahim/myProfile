import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
export default function Contact() {

  Swal.fire({
    icon: "success",
   text: "You are Welcom",
  showConfirmButton:false,
  timer:1000
 });
  useEffect(()=>{
    AOS.init({duration:2000})
    },[])
  return <>

  <Helmet>
<title>Contact me</title>
 <link rel="icon" type="image/svg+xml" href="/m.svg" />
  </Helmet>
  <div className="container mt-5">
    
     <div className="row py-0 w-75 m-auto">
     <h6 className='text-thierd ' data-aos='fade-right'data-aos-duration="1500" >Contact Me <i className='fas fa-phone text-thierd fa-bounce' ></i></h6>
    <p className='text-muted' data-aos='fade-right' data-aos-duration="1800">Feel free to reach out. I will get back to you as soon as possible!</p>
     <form className='py-0 mt-0' >
      <label  data-aos='fade-right'data-aos-duration="1000" className=' text-light' htmlFor="name">Name</label>
      <input data-aos='fade-right'data-aos-duration="1000" type="text" className='form-control mb-1 py-0 bg-gray text-second ' id='name' name='name' placeholder='enter your name' />
     
      <label data-aos='fade-right'data-aos-duration="1400" className=' text-light' htmlFor="email">Email</label>
      <input data-aos='fade-right'data-aos-duration="1400" type="text" className='form-control mb-1 py-0 bg-gray text-second 'id='email' name='email' placeholder='enter your email' />
     
      <label data-aos='fade-right'data-aos-duration="1800" className=' text-light' htmlFor="phone">phone</label>
      <input data-aos='fade-right'data-aos-duration="1800" type="tel" className='form-control mb-1 py-0 bg-gray text-second '  id='phone' name='phone' placeholder='enter your phone'/>
     
      <label  data-aos='fade-right'data-aos-duration="2200" className=' text-light' htmlFor="message">message</label>
      <br />
     <textarea data-aos='fade-right'data-aos-duration="2200"  className='bg-gray  rounded-2' name="message" id="message" cols="15" rows="2" placeholder='enter your message here'></textarea>
     <br /><br />
     <button  type='submit' className='btn btn-sm btn-second   px-5 mb-2'>send</button>
     
     </form>
     </div>

  </div>
  
  
  </>
}
