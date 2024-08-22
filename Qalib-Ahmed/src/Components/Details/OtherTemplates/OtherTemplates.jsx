import React, { useState, useEffect } from 'react';
import './OtherTemplates.css'
import AllJson from '../../../../public/AllJson.json';
import { Link } from 'react-router-dom';
import { MdExpandMore } from "react-icons/md";


const OtherTemplates = () => {
    const data = AllJson.posts;
    const [savedItems, setSavedItems] = useState([]);
    const [messages, setMessages] = useState({});
    const [showMorePost, setShowMorePost] = useState(3)
    const lodMore = () => {
        setShowMorePost((prev) => prev + 3);
    }
    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('savedItems')) || [];
      setSavedItems(saved);
    }, []);
  
    const saveToLocalStorage = (item) => {
      let updatedSavedItems = [...savedItems];
      let updatedMessages = { ...messages };
    
      if (savedItems.some(savedItem => savedItem.id === item.id)) {
        updatedSavedItems = updatedSavedItems.filter(savedItem => savedItem.id !== item.id);
        updatedMessages[item.id] = 'تم إزالة العنصر من المفضلة';
      } else {
        updatedSavedItems.push(item);
        updatedMessages[item.id] = 'تم حفظ العنصر في المفضلة';
      }
    
      setSavedItems(updatedSavedItems);
      setMessages(updatedMessages);
      localStorage.setItem('savedItems', JSON.stringify(updatedSavedItems));
    
      setTimeout(() => {
        setMessages(prevMessages => {
          const { [item.id]: _, ...rest } = prevMessages;
          return rest;
        });
      }, 4000); // إخفاء الرسالة بعد 4 ثواني
    };
    
  
    const isItemSaved = (item) => {
      return savedItems.some(savedItem => savedItem.id === item.id);
    };
  
    return (
      <>
          <div className='OtherTemplates'>
            <div className="container">
            <div className="row">
    {data
          .sort(() => Math.random() - 0.5) // ترتيب العناصر بشكل عشوائي
      .slice(0, showMorePost) // إضافة هذا الجزء لتحديد عدد العناصر المعروضة
      .map((item, index) => (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marginBoutton" key={index}>
          <div className="card" style={{ position: 'relative' }}>
            <Link to={`/Qalib/Details/${item.id}`}>
              <img src={`${item.img}?${index}`} className="card-img-top" alt="" />
            </Link>
            <Link to={`/Qalib/Details/${item.id}`} className="custom-link">
              <div className="card-body mb-2">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </Link>
            <Link to={item.view} target="_blank" className="custom-link">
            <div className='text-icon2'>
            <i className="fa-regular fa-eye"></i>
            <p>لمشاهدة القالب</p>
            </div>
            </Link>
            <Link to={data.download} target="_blank" className="custom-link">
            <div className="text-icon2">
            <i className="fa-solid fa-file-arrow-down"></i>
            <p>لتحميل القالب</p>
            </div>
            </Link>
          </div>
        </div>
      ))}
      {showMorePost >= data.length ? null : (
        <div>
              <span className="load-more-button" onClick={lodMore}>
                  للمزيد <MdExpandMore size={20}/>
              </span>
              </div>
                  )}
  </div>
  
            </div>
          </div>
      </>
    );
}

export default OtherTemplates
