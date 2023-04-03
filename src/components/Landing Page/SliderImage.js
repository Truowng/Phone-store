import { useState, useEffect } from "react";
import React from "react";

function SliderImage() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const backgrounds = [
    'url("/image/banner-slide-1.jpg")',
    'url("/image/banner-slide-2.jpg")',
    'url("/image/banner-slide-3.jpg")',
  ];
  const h1Text = [
    "ĐẠI LÝ PHÂN PHỐI ĐỒ ĐIỆN",
    "NHÀ THẦU UY TÍN",
    "ĐA DẠNG CHỦNG LOẠI.",
  ];
  const content = [
    "TOP 1 VIỆT NAM",
    "HƠN 10 NĂM KINH NGHIỆM",
    "Đầy đủ thương hiệu",
  ];
  useEffect(() => {
    setShow(true);
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % backgrounds.length);
      setShow(false);
      setTimeout(() => setShow(true), 100);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
  return (
      <div
        className="slider-container"
        style={{ backgroundImage: backgrounds[index] }}
      >
        <div className={`slider-overlay ${show ? "show" : ""}`}>
          <h1>{h1Text[index]}</h1>
          <h6 className="mt-4">{content[index]}</h6>
          <button className="btn btn-outline-primary mt-5">LIÊN HỆ</button>
        </div>
      </div>
    
  );
}

export default SliderImage;