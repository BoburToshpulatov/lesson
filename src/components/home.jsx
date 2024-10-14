import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import "./homeStyle.css";
import logo2 from "../assets/Dermatology & Skin C.svg";
import busicon from "../assets/bus-icon.png"
import everytimeicon from "../assets/24.svg"
import shieldicon from "../assets/shield-1 1.svg"
import ellipse from "../assets/Ellipse 5.svg"

const HomeComponent = () => {
  return <div>
    <Navbar/>
  <div className="bgwrapper">
    <div className="new-collection">
      <h1>New Arrival</h1>
      <img src={logo2} alt="logo2-img" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
    <button>BUY NOW</button>
    </div>
  </div>

  <div className='extra-information'>
    <div className='delivery'>
<img src={busicon} alt="bus-img" />
<div className='deliver-text'>
<h1>Free Delivery</h1>
<p>Lorem ipsum dolor sit amet.</p>
</div>
    </div>

    <div className='delivery'>
      <img src={everytimeicon} alt="24/7-icon" />
      <div className='deliver-text'>
        <h1>100% Authentic</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>

    <div className='delivery'>
      <img src={shieldicon} alt="shield-icon" />
      <div className='deliver-text'>
        <h1>Support 24/7</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
</div>

<div className='heading'>
  <h1>Inspiration Collection</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

<div className='pictures'>
  <div className='picture1'></div>
  <div className='picture2'></div>
  <div className='picture3'></div>
</div>

<div className='girl-photo'>
  <div className='girl-photo-left'>
    <h1>Beautify Your Space</h1>
    <p>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <button>LEARN MORE</button>
  </div>
  <div className='girl-photo-right'>
    <div className='girl-img'></div>
    <img src={ellipse} alt="ellipse-icon" />
  </div>
</div>

<div className='picture-heading2'>
<h1>Browse The Range</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

<div className='gallery'>
  <div className='gallery-pic1'></div>
  <div className='gallery-pic2'></div>
  <div className='gallery-pic3'></div>
</div>

<div className='name-pic'>
<h1>Dining</h1>
<h1>Living</h1>
<h1>Bedroom</h1>
</div>

<div className='picture-heading3'>
<h1>How It Works</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

<div className='second-gallery'>
<div className='gallery-box1'>
  <div className='box-pic1'></div>
  <div className='ring'><button>1.</button></div>
</div>
<div className='gallery-box1'>
<div className='box-pic2'></div>
<div className='ring'><button>2.</button></div>
</div>
<div className='gallery-box1'>
<div className='box-pic3'></div>
<div className='ring'><button>3.</button></div>
</div>
</div>

<div className='options'>
<div className='option1'>
<h1>Purchase Securely</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
<div className='option1'>
<h1>Ships From Warehouse</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
<div className='option1'>
<h1>Style Your Room</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
</div>

<div className='email'>
  <div className='email-text'>
    <h1>Join Our Mailing List</h1>
  <p>Sign up to receive inspiration, product updates, and special offers from our team.</p>
  </div>
  <div className='submit-btn'>
    <input type="text" placeholder='example@gmail.com' />
    <button>Submit</button>
  </div>
</div>

    <Footer/>
  </div>;
  
};

export default HomeComponent;


