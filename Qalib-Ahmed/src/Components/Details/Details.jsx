import React, { useEffect, useState } from 'react';
import './Details.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import OtherTemplates from './OtherTemplates/OtherTemplates'



const Details = () => {
  const [data, setData] = useState(null);
const [tech, setTech] = useState([]); // حالة لتخزين tech
const [type, setType] = useState([]); // حالة جديدة لتخزين type
const { id } = useParams();
const baseApi = axios.create({
  baseURL: '/Qalib/AllJson.json'
});

const fetchDetails = async () => {
  try {
    const response = await baseApi.get('');
    console.log("البيانات المستجابة:", response.data.posts);
    const item = response.data.posts.find(post => post.id === parseInt(id));
    if (item) {
      setData(item);
      setTech(item.tech); // تحديث حالة tech
      setType(item.type); // تحديث حالة type
    } else {
      console.log("لم يتم العثور على العنصر:", id);
    }
  } catch (error) {
    console.log("Exist", error);
  }
};

useEffect(() => {
  fetchDetails();
}, [id]);

  return (
    <div className="details">
    <div className="container">
      <div className="row">
        {data ? (
          <>
          <div className="col-lg-8 col-md-12 col-sm-12">
              <img src={data.img} alt={data.title} />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="title-qalib">
              <h2>{data.title}</h2>
              <Link to={data.ByUrl} target="_blank" className="custom-link"><p><span>بواسطة : </span>{data.By}</p></Link>
            </div>
            <div className="text-det">
              <h2>وفر الوقت والجهد مع قوالب الويب.</h2>
            <div className="text-point">
            <i class="fa-regular fa-circle-check"></i>
            <p>ابدأ مشروعك الرقمي الآن😍</p>
            </div>
            <div className="text-point">
            <i class="fa-regular fa-circle-check"></i>
            <p>حوّل رؤيتك إلى واقع 😍</p>
            </div>
            <div className="text-point">
            <i class="fa-regular fa-circle-check"></i>
            <p>اجعل موقعك يتألق 😍</p>
            </div>
            </div>
            <Link to={data.view} target="_blank" className="custom-link">
            <div className='text-icon'>
            <i className="fa-regular fa-eye"></i>
            <p>لمشاهدة القالب</p>
            </div>
            </Link>
            <Link to={data.download} target="_blank" className="custom-link">
            <div className="text-icon">
            <i className="fa-solid fa-file-arrow-down"></i>
            <p>لتحميل القالب</p>
            </div>
            </Link>
          </div>
           <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
            <div className='description'>
              <h3>تفاصيل القالب :</h3>
              <p>{data.description}</p>
              <h3 className='hdes'>التقنيات المستخدمة :</h3>
              {tech.map((item, index) => (
            <p key={index} className="tech">{item}</p>
          ))}
           <h3 className='hdes mb-3'> الفئة :</h3>
           <div className="category-container">
                {type.map((item, index) => (
                <p key={index} className="category">{item}</p>
          ))}
           </div>
           <h3 className='OtherTemplates-title mb-3'>قوالب أخرى:</h3>
          </div>
            </div>
           </div>
           <OtherTemplates />
          </>
        ) : (
          <p>لم يتم العثور على البيانات</p>
        )}

      </div>
    </div>
  </div>
  
  );
};

export default Details;
