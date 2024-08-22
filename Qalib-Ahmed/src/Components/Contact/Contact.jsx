import React from 'react';
import './Contact.css';
import { FiSend } from "react-icons/fi";


const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className="container section-container">
          <div className="row BoxShadow">
            <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="contact-form-desgin">
                    <div className="text-center">
                        <h5>إطلب تخصيص القالب أو تصميم قالب</h5>
                    </div>
                    <form>
                        <div className="contact-form">
                            <label className='form-labek'>الأسم</label>
                            <input type="text" className='form-control'/>
                        </div>
                        <div className="contact-form">
                            <label className='form-labek'>الإيميل</label>
                            <input type="text" className='form-control'/>
                        </div>
                        <div className="contact-form">
                            <label className='form-labek'>إختار الخدمة</label>
                            <select className='custom-select =form-control'>
                                <option value="">طلب تصميم</option>
                                <option value="">تخصيص قالب</option>
                                <option value="">إستفسار</option>
                            </select>
                        </div>
                        <div className="contact-form">
                            <label className='form-labek'>تفاصيل الطلب</label>
                            <textarea type="text"  maxLength="500" className='form-control' rows="6"/>
                        </div>
                        <div className="button-submit">
                            <p>إرسال <FiSend size={20} /></p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="map-location" style={{ position: 'relative', paddingBottom: '56.25%', height: "40rem", overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242515.3715479433!2d42.713235325940616!3d18.241940986567506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e3546315720931%3A0xa177558c718919b4!2z2KPYqNmH2Kc!5e0!3m2!1sar!2ssa!4v1723962095134!5m2!1sar!2ssa"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
