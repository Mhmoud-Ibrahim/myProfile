
import Slider from "react-slick";
import ecomercy from '../assets/e-comercy.jpg'
import market from '../assets/Market.png'
import trending from '../assets/trend.png'
import games from '../assets/Game.jpg'
import meals from '../assets/meals.jpg'
import memorygame from '../assets/memorygame.png'
import notes from '../assets/Notes.jpg'
import party from '../assets/Party (2).jpg'
import photographer from '../assets/photoghrafer.jpg'
import quiz from '../assets/quotes.jpg'
import wather from '../assets/wather.jpg'
import skytouch from '../assets/skytouch.jpg'
import yummy from '../assets/Yummy.jpg'
import crud from '../assets/Notes.jpg'
import Xo from '../assets/XO.jpg'
import quotes from '../assets/quotes.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Picture() {

  const projectdetails =[
    {id:1,img:market,name:'Market',link:'https://mhmoud-ibrahim.github.io/market/',discreption:'react website build with real database with api and backend  '},
    {id:2,img:trending,name:'Trending',link:'https://mhmoud-ibrahim.github.io/trend/',discreption:'react website build with real database with api and backend '},
    {id:3,img:wather,name:'Weather',link:'https://mhmoud-ibrahim.github.io/Weather/',discreption:'javascript website build to search with api in countries condition this search by name of city '},
    {id:4,img:yummy,name:'Yummy',link:'https://mhmoud-ibrahim.github.io/Yummyjs/',discreption:'web site build with javascript depend on api , in it we show alot of meals '},
    {id:5,img:quiz,name:'Quiz',link:'https://mhmoud-ibrahim.github.io/Quiezes/',discreption:' an application with javascript build to learn OOP  there is api  to backend '},
    {id:6,img:skytouch,name:'Skytouch',link:'https://mhmoud-ibrahim.github.io/skytouch/',discreption:' aportfolio  build in html ,css and javascript this is in the begening of my work'},
    {id:7,img:games,name:'Games',link:'https://mhmoud-ibrahim.github.io/Games/',discreption:'web site build in javascript depend on api to show alot of different games'},
    {id:8,img:party,name:'Party',link:'https://mhmoud-ibrahim.github.io/EgyptionParty/',discreption:'an event is egyption party and we wait for it'},
    {id:9,img:photographer,name:'Photographer',link:'https://mhmoud-ibrahim.github.io/photographer/',discreption:'aportfolio  build in html ,css and javascript this is in the begening of my work'},
    {id:10,img:meals,name:'Meals',link:'https://mhmoud-ibrahim.github.io/RecipiesFood/',discreption:'web site build with javascript depend on api , in it we show alot of meals  '},
    {id:11,img:memorygame,name:'Memorygame',link:'https://mhmoud-ibrahim.github.io/Memorygame/',discreption:'memory game that popular game build in html ,css and javascript and sound but it just one level now'},
    {id:12,img:notes,name:'Notes',link:'https://mhmoud-ibrahim.github.io/cruds1/',discreption:'when i learn to build a CRUDS system to build web site to (Create,Read,Delete and Search )'},
    {id:13,img:crud,name:'CRUDS',link:'https://mhmoud-ibrahim.github.io/cruds1/',discreption:'Have build CRUD system and learned how to (Create,Read,Update,Delete and search) on the CRUDS aplication with plain javascript' },
    {id:14,img:Xo,name:'XO',link:'https://mhmoud-ibrahim.github.io/Xo-game/',discreption:'this is a (x.o) the popular gam in react,js'},
    {id:15,img:quotes,name:'Quotes',link:'https://mhmoud-ibrahim.github.io/Quotes/',discreption:'website that show Quotes build in html,css and javascript '},
    {id:16,img:ecomercy,name:'E-comercy',link:'https://mhmoud-ibrahim.github.io/E-comercy/',discreption:'react website build with real database with api and backend  '},
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };


  useEffect(()=>{
    AOS.init({duration:2000})
    },[])
  return <>
  <Helmet>
    <title>Picture</title>
  </Helmet>
  <div className="container slider m-auto w-100 py-2">
   <Slider   className="  w-75 m-auto p-0 mt-5" {...settings}>
    {projectdetails.map((product,ind)=> <>
    <div key={ind} data-aos="fade-down"    data-aos-duration="1500" className="text-center " >
    <img  src={product.img} className="w-75 mt-4 m-auto"  loading="lazy" alt="" />
    <h3 className="text-main">{product.name}</h3>
    </div>
    </>)}
    </Slider>
<div  className="row mt-4">
  {projectdetails.map((project,index)=><>
   <div key={index}  className="col-md-4">
    <div  className="projectCard    cursor-pointer  text-center p-2">
      <Link to={project.link}>
      <img data-aos="fade-right"    data-aos-duration={'1500'+project.id} src={project.img}  className="w-100 border border-1 border-light img-fluid" loading="lazy" alt="" />
      <h5 className="text-main">{project.name}</h5>
      </Link>

    </div>
   </div>
  </>)}
</div>

  );</div>

  
  </>
}
