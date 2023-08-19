
import './App.css';
import pic from './logo.svg'
import cart from './icon-cart.svg';
import avatar from './image-avatar.png';
import pro1 from './image-product-1.jpg';
import pro1thumb from './image-product-1-thumbnail.jpg';
import pro2thumb from './image-product-2-thumbnail.jpg';
import pro3thumb from './image-product-3-thumbnail.jpg';
import pro4thumb from './image-product-4-thumbnail.jpg';
import plus from './icon-plus.svg';
import minus from './icon-minus.svg';


function App() {
  return (
    <div className="App">
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src={pic} alt='pic' /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Collections</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Men</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">W</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
              <span class="navbar-right">
                <img src={cart} alt='cart' />
                <img src={avatar} className='avatar' alt='avatar' />
              </span>

            </div>
          </div>

        </nav>

        <hr />
      </div>

      <div class="flex-container">
        <div class="flex-item-left">
          <div class="big">
            <img src={pro1} alt='pro1' className='pro1' />
          </div>
          <div class="small">
            <div><img src={pro1thumb} /></div>
            <div><img src={pro2thumb}/></div>
            <div><img src={pro3thumb}/></div>
            <div><img src={pro4thumb}/></div>
          </div>
        </div>
        <div class="flex-item-right">
          <div>
            <h5 style={{color:'#de7438'}}>sneaker Company</h5>
            <h1>Fall Limited Edition Sneakers</h1>
            <p style={{fontSize:'16px'}}>These low profile Sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand and everything the weather can offer.</p>
          </div>


          <div style={{display:'flex'}}>
            <span class="price">$125.00</span>
            <span class="percent">50%</span>
          </div>
          <div class="price_strike" >
            <span>$125.00</span>
          </div>

          <div class="cart">
            <div class="counter">
              <div><span><img src={minus} alt='minus' /></span></div>
              <div><h6>0</h6></div>
              <div><span><img src={plus} alt='plus' /></span></div>
            </div>
            <div class="button_cart">
              <button class="btn1"><span style={{marginRight:'10px'}}><img src={cart} alt='cart'/></span>Add to cart</button></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
