import React, { useState, useEffect } from 'react';
import AllJson from '../../../public/AllJson.json';
import { Link } from 'react-router-dom';
import { MdExpandMore } from "react-icons/md";




const LandingPage = () => {
  const data = AllJson.posts;
  const [savedItems, setSavedItems] = useState([]);
  const [messages, setMessages] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [showMorePost, setShowMorePost] = useState(6)
  const lodMore = () => {
      setShowMorePost((prev) => prev + 3);
  }


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedItems')) || [];
    setSavedItems(saved);
  }, []);

  const filteredData = data.filter(item => 
    item.type.includes("صفحة هبوط") && 
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
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
        <div className='main mb-5 mt-3 mt-lg-5 mt-md-5'>
        <div className="container">
          <div className="row"> 
            <div className='input-section'>
            <input
        type="text"
        placeholder="ابحث هنا..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
            </div>
            </div>
            </div>
          <div className="container">
          <div className="row">
          {filteredData
              .filter(item => item.type.includes("صفحة هبوط")) // تصفية العناصر
              .sort((a, b) => new Date(b.date) - new Date(a.date)) // ترتيب العناصر بترتيب تنازلي
              .slice(0, showMorePost) // تحديد عدد العناصر المعروضة
              .map((item, index) => (
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marginBoutton" key={index}>
        <div className="card" style={{ position: 'relative' }}>
          <Link to={`/Qalib/Details/${item.id}`}>
            <img src={`${item.img}?${index}`} className="card-img-top" alt="" />
          </Link>
          <Link to={`/Qalib/Details/${item.id}`} className="custom-link">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </Link>
          <div className="iconCard">
            <Link to={item.view} target="_blank" className="custom-link">
              <i className="fa-regular fa-eye"></i>
            </Link>
            <Link to={item.download} target="_blank" className="custom-link">
              <i className="fa-solid fa-file-arrow-down"></i>
            </Link>
            <i className={`fa-solid fa-heart ${isItemSaved(item) ? 'saved' : ''}`} 
              onClick={() => saveToLocalStorage(item)}
              style={{ color: isItemSaved(item) ? '#6cee69' : 'inherit' }}
            ></i>
            {messages[item.id] && <div className="message">{messages[item.id]}</div>}
          </div>
        </div>
      </div>
    ))}
   {showMorePost >= filteredData.length ? null : (
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

export default LandingPage
