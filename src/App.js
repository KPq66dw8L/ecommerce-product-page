import './App.css';

const logoImg = process.env.PUBLIC_URL + '/images/logo.svg';
const productImg_1 = process.env.PUBLIC_URL + '/images/image-product-1.jpg';
const productThb_1 = process.env.PUBLIC_URL + '/images/image-product-1-thumbnail.jpg';
const cartIcn = process.env.PUBLIC_URL + '/images/icon-cart.svg';
const avatarImg = process.env.PUBLIC_URL + '/images/image-avatar.png';
const minusSign = process.env.PUBLIC_URL + '/images/icon-minus.svg';
const plusSign = process.env.PUBLIC_URL + '/images/icon-plus.svg';

function App() {
  return (
    <div className="App">

      <div className="navBar">
        <div className="nav-1">
          <img src={logoImg} className="logoIcn"/>
          <ul>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="nav-2">
          <img src={cartIcn} className="cartIcn"/>
          <img src={avatarImg} className="avatarImg"/>
        </div>
      </div>

      <div className="main-product-content">
        <div className="main-images">
          <img src={productImg_1} className="productImg"/>
          <div className="thumbnails">
            <img src={productThb_1} className="productThb"/>
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
            {/* <div className="break"/> */}
            <h3 className="old-price">$250.00</h3>

          <div className="product-buy">
            <a className="product-qtt"> <img src={minusSign} /> 0 <img src={plusSign} /> </a>
            <a className="addToCart-button">  Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
