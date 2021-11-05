import {useState} from 'react';
import './App.css';

const logoImg = process.env.PUBLIC_URL + '/images/logo.svg';

const cartIcn = process.env.PUBLIC_URL + '/images/icon-cart.svg';
const avatarImg = process.env.PUBLIC_URL + '/images/image-avatar.png';
const minusSign = process.env.PUBLIC_URL + '/images/icon-minus.svg';
const plusSign = process.env.PUBLIC_URL + '/images/icon-plus.svg';

function App() {

  const thumbnails = [
    {id: 1, src: process.env.PUBLIC_URL + '/images/image-product-1-thumbnail.jpg'},
    {id: 2, src: process.env.PUBLIC_URL + '/images/image-product-2-thumbnail.jpg'},
    {id: 3, src: process.env.PUBLIC_URL + '/images/image-product-3-thumbnail.jpg'},
    {id: 4, src: process.env.PUBLIC_URL + '/images/image-product-4-thumbnail.jpg'}
  ]

  const productImages = [
    {id: 1, src: process.env.PUBLIC_URL + '/images/image-product-1.jpg'},
    {id: 2, src: process.env.PUBLIC_URL + '/images/image-product-2.jpg'},
    {id: 3, src: process.env.PUBLIC_URL + '/images/image-product-3.jpg'},
    {id: 4, src: process.env.PUBLIC_URL + '/images/image-product-4.jpg'}
  ]

  const [qtt, setQtt] = useState(0);
  const [thbActive, setThbActive] = useState(1);
  const [productImg, setProductImg] = useState(productImages[0].src);

  // const thbHandler = () => {
    
  //   if (thbActive == 0){
  //     setThbActive(1);
  //   }else {
  //     setThbActive(0);
  //   }
  // }

  const classActive = (thbId) => {
    
    if (thbId == thbActive) {
      return "productThb-active";
    } 
    
  }

  return (
    <div className="App">

      <div className="navBar">
        <div className="nav-1">
          {/* Hamburger Menu  */}
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul className="nav-text" id="menu">
                <li className="nav-div-active"><a href="#">Collections</a></li>
                <li><a href="#"> Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </nav>
          <img src={logoImg} className="logoIcn noselect"/>
          <ul className="desktop-nav">
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          
        </div>
        <div className="nav-2">
          <img src={cartIcn} className="cartIcn noselect"/>
          <img src={avatarImg} className="avatarImg noselect"/>
        </div>
      </div>

      <div className="main-product-content">
        <div className="main-images noselect">
          <img src={productImg} className="productImg"/>
          <div className="thumbnails">
            
            {thumbnails.map(thumbnail => {
              return (
              <img src={thumbnail.src} className={"productThb "+ classActive(thumbnail.id)} onClick={ () => {setThbActive(thumbnail.id);setProductImg(productImages[thumbnail.id-1].src)} }/>
              );
            })}
          </div>
        </div>

        <div className="main-description">
          <h4 className="product-brand">Sneaker Company</h4>

          <h1>Fall Limited Edition Sneakers</h1>

          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

          <div className="prices">
            
              <h2>$125.00</h2>
              <h3 className="promo-coupon">50%</h3>
          </div> 
            
            <h3 className="old-price">$250.00</h3>

          <div className="product-buy">
            <div className="product-qtt noselect"> 
              <div className="qttMinus" onClick={ () => qtt ? setQtt(qtt -1) : null}>
                <img src={minusSign} />
              </div> 
              {qtt}
              <div className="qttPlus" onClick={ () => setQtt(qtt +1) }>
                <img src={plusSign} /> 
              </div>
            </div>
            <a className="addToCart-button noselect">  Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
