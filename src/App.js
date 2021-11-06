import {useState} from 'react';
import './App.css';

const logoImg = process.env.PUBLIC_URL + '/images/logo.svg';

const cartIcn = process.env.PUBLIC_URL + '/images/icon-cart.svg';
const avatarImg = process.env.PUBLIC_URL + '/images/image-avatar.png';
const minusSign = process.env.PUBLIC_URL + '/images/icon-minus.svg';
const plusSign = process.env.PUBLIC_URL + '/images/icon-plus.svg';

const products = [
  { id: 1, 
    thumbnails: [
    {id: 1, src: process.env.PUBLIC_URL + '/images/image-product-1-thumbnail.jpg'},
    {id: 2, src: process.env.PUBLIC_URL + '/images/image-product-2-thumbnail.jpg'},
    {id: 3, src: process.env.PUBLIC_URL + '/images/image-product-3-thumbnail.jpg'},
    {id: 4, src: process.env.PUBLIC_URL + '/images/image-product-4-thumbnail.jpg'}
  ], productImages: [
    {id: 1, src: process.env.PUBLIC_URL + '/images/image-product-1.jpg'},
    {id: 2, src: process.env.PUBLIC_URL + '/images/image-product-2.jpg'},
    {id: 3, src: process.env.PUBLIC_URL + '/images/image-product-3.jpg'},
    {id: 4, src: process.env.PUBLIC_URL + '/images/image-product-4.jpg'}
  ], 
  brand: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  initPrice: 250,
  price: 125.00,
  discount: 50
}
]

function App() {

  const [qtt, setQtt] = useState(0);
  const [thbActive, setThbActive] = useState(1);
  const [count, setCount] = useState(0);
  const [productImg, setProductImg] = useState(products[0].productImages[count].src);

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

          <div className="previous" onClick={ () => {if(count > 0){setCount(count-1);setProductImg(products[0].productImages[count].src)};console.log(count + " & " + productImg)} }></div>
          <img src={productImg} className="productImg"/>
          <div className="next" onClick={ () => {if(count < 3){setCount(count+1);setProductImg(products[0].productImages[count].src)};console.log(count + " & " + productImg)} }></div>

          <div className="thumbnails">
            
            {products[0].thumbnails.map(thumbnail => {
              return (
              <img src={thumbnail.src} className={"productThb "+ classActive(thumbnail.id)} onClick={ () => {setThbActive(thumbnail.id);setProductImg(products[0].productImages[thumbnail.id-1].src)} }/>
              );
            })}
          </div>
        </div>

        <div className="main-description">
          <h4 className="product-brand">{products[0].brand}</h4>

          <h1>{products[0].name}</h1>

          <p>{products[0].description}</p>

          <div className="prices">
            
              <h2>${products[0].price}.00</h2>
              <h3 className="promo-coupon">{products[0].discount}%</h3>
          </div> 
            
            <h3 className="old-price">${products[0].initPrice}.00</h3>

          <div className="product-buy">
            <div className="product-qtt noselect"> 
              <div className="qttMinus" onClick={ () => qtt ? setQtt(qtt -1) : null}>
                {/* <img src={minusSign} /> */}
              </div> 
              {qtt}
              <div className="qttPlus" onClick={ () => setQtt(qtt +1) }>
                {/* <img src={plusSign} />  */}
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
