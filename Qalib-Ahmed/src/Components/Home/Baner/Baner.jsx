import React from 'react'
import './Baner.css'
import BanerJson from '../../../../public/Json/BanerJson.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Baner = () => {
    const data = BanerJson.posts;
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        initialSlide: 0,
        rows:1,
        slidesPerRow:1,
        autoplay: true, // تفعيل التمرير التلقائي
        autoplaySpeed: 8000, // المدة الزمنية بين كل انتقال (3000 مللي ثانية = 3 ثواني
        rtl: true, // تفعيل التشغيل من اليمين إلى اليسار
        arrows: false, // إخفاء الأسهم
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                initialSlide: 2,
                dots: true,
                arrows: false, // إخفاء الأسهم
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                autoplay: true,
                slidesToScroll: 1,
                dots: true,
                arrows: false, // إخفاء الأسهم
              }
            }
          ]
      };
  return (
    <>
     <div className="baner">
        <div className="container banerContainer">
        <Slider {...settings}>
        {data.map((item, index)=> (
             <div className="row p-0"  key={index}>
                 <div className="col-xl-12 .col-lg-12 col-md-12 col-sm-12">
                 <div className="imgBaner">
                     <img src={item.img} alt={item.title} />
                 </div>
                 <div className="description-baner">
                     <h1>{item.title}</h1>
                     <p>{item.content}</p>
                 </div>
             </div>
         </div>
        ))}
         </Slider>
        </div>
     </div>
     </>
  )
}

export default Baner
