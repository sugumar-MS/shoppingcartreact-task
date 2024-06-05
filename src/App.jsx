
import { useState } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);
  const products = [
    { id: 1, name: 'Elina 20 Pcs Multi Design Cute Hair Clips Set', description: 'Made of high-quality silica gel material, will not damage the hair, the small baby clip is also suitable for babies with less hair. With rainbow, unicorn, ice cream designs, come with a metal hair clip in the back, which could held your hair well', price: 10.99, image: 'https://www.jiomart.com/images/product/original/rvjawdatrw/elina-20-pcs-multi-design-cute-hair-clips-set-baby-fancy-pin-for-kids-girls-accessories-cartoon-doll-product-images-rvjawdatrw-0-202308251306.jpg?im=Resize=(600,750)' },
    { id: 2, name: 'Dettol Liquid', description: 'FOR HOME HYGIENE: Remove 99.9% germs from floors, surfaces, and laundry', price: 14.99, image: 'https://m.media-amazon.com/images/I/41jjJaVULWL._SX300_SY300_QL70_FMwebp_.jpg' },
    { id: 3, name: 'Ortho-XR Joint Pain Relief Massage Oil', description: 'SPECIAL WARMING FORMULA: Ortho-XR Pain Relief Massage Oil features a special warming formula for fast absorption & deep penetration to give quick & long lasting relief from all kinds of Body, Muscle, Joint, Sprain & Arthritis Pain - Back, Shoulder, Hand, Elbow, Wrist, Leg, Knee, Ankle, Foot', price: 9.99, image: 'https://m.media-amazon.com/images/I/71FcWOyj7+L._SL1500_.jpg' },
    { id: 4, name: 'Handmade Wooden Jewellery Box', description: 'Size: Length- 6 inch, Width- 4.5 inch, Height- 3.5 inches', price: 19.99, image: 'https://m.media-amazon.com/images/I/412b6nLy2lL._SX300_SY300_QL70_FMwebp_.jpg' },
    { id: 5, name: 'Brut Deodorant Spray for Men', description: 'The aromatic blend of ingredients used in this amazing fragrance will keep you right on top.', price: 12.99, image: 'https://m.media-amazon.com/images/I/41H+dZKKqRL._SY300_SX300_.jpg' },
    { id: 6, name: 'Herbal Brews - Pain Relief Patches ', description: 'PAIN RELIEVING PATCH: Effective for large pain areas, these comfortable & convenient wormwood herbal patches have powerful pain fighters that work at the site of the pain.', price: 8.99, image: 'https://m.media-amazon.com/images/I/61Fvc0f4DhL._SX679_.jpg' },
    { id: 7, name: 'Flexnest Adjustable Iron Dumbbells Set', description: 'Included Components: 2 X Adjustable Dumbbell (Pair)', price: 24.99, image: 'https://m.media-amazon.com/images/I/610UFeZyyBL._SX679_.jpg' },
    { id: 8, name: 'Kore PVC 10-40 Kg Home Gym Set with One 3 Ft Curl and One Pair Dumbbell Rods with Gym Accessories', description: '16 kg of PVC weight (2 kg x 8 = 16Kg)', price: 17.99, image: 'https://m.media-amazon.com/images/I/81XNzjmXi+L._SX679_.jpg' },
    { id: 9, name: 'AutoBizarre 12 LED Multicolor Music Controlled Sound Activated for Car Interior Atmosphere Light (Works with All Cars)', description: 'Works with all cars', price: 11.99, image: 'https://m.media-amazon.com/images/I/51iaObXIg2L.jpg' }
  ];
    
  

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { product: product, quantity: 1 }]);
    }
  };

  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">All Products</a></li>
                  <li><a className="dropdown-item" href="#">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="button" onClick={toggleCartVisibility}>
                <i className="fas fa-shopping-cart"></i> 🛒Cart ({cart.length})
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="black-background">
        <div className="container">
          <p className="text-white text-center">Shop with Style</p></div>
          <div>
          <p className='subHeading'>With this shop hompeage template</p>
        </div>
      </div>
      <div className="container">
        <ProductList products={products} addToCart={addToCart} />
        {isCartVisible && <ShoppingCart cart={cart} />}
      </div>
    </div>
  );
};

export default App;