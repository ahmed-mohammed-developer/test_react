import React from 'react'
import './Footer.css'
import footerEdit from '../../assets/images/footerEdit.png'
import SaudiTime from '../SaudiTime/SaudiTime'




const Footer = () => {
    const year = new Date().getFullYear(); // يحصل على السنة الحالية
  return (
    <div className='footer'>
      <div className="main-footer ">
        <div className="container">
            <div className="row mb-5 baner">
                <div className="col-lg-3 col-md-6 col-sm-6 imgSection marginBottom">
                <a href="/Qalib/">
                <img src={footerEdit} alt="logo Image" />
                </a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="deatelsSection">
                        <h3>قالب</h3>
                        <a href=""><p>جميع القوالب</p></a>
                        <a href="/Qalib/LandingPage" target="_blank"><p>صفحة هبوط</p></a>
                        <a href="/Qalib/PersonalTemplate" target="_blank"><p>قالب شخصي</p></a>
                        <a href="/Qalib/WebsitesTemplate" target="_blank"><p>قالب شركة</p></a>
                        <a href="/Qalib/OtherTemplate" target="_blank"><p className='marginBottom'>أخرى</p></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                <div className="deatelsSection">
                        <h3>تعلم مجاناً</h3>
                        <a href="https://satr.codes/" target="_blank"><p>منصة سطر التعليمية</p></a>
                        <a href="https://elzero.org/" target="_blank"><p>أكاديمية الزيرو</p></a>
                        <a href="https://harmash.com/" target="_blank"><p className='marginBottom'>هرمش</p></a>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                <div className="deatelsSection marginBottom">
                        <h3>أبقى على تواصل</h3>
                        <a href="#"><i class="fa-brands fa-x-twitter footericon"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin footericon"></i></a>
                        <a href="#"><i class="fa-regular fa-envelope-open footericon"></i></a>
                        
                    </div>
                </div>
            </div>
            <div className="row baner">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="deatelsSection marginBottom">
                        <h3>التوقيت المحلي للرياض</h3>
                        <p>< SaudiTime /></p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="deatelsSection marginBottom">
                        <h3>جميع الحقوق محفوظة</h3>
                        <p>قالب {year}</p>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
