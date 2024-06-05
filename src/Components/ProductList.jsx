// ProductList.jsx
import React, { useState } from 'react';

const ProductList = ({ products, cart, addToCart, removeFromCart }) => {
  const [addedToCart, setAddedToCart] = useState([]);

  // Function to check if a product is in the cart
  const isAddedToCart = (productId) => {
    return addedToCart.includes(productId);
  };

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(prevAddedToCart => [...prevAddedToCart, product.id]);
  };

  // Function to handle removing a product from the cart
  const handleRemoveFromCart = (productId) => {
    console.log("Before removal:", addedToCart);
    removeFromCart(productId);
    setAddedToCart(prevAddedToCart => prevAddedToCart.filter(id => id !== productId));
    console.log("After removal:", addedToCart);
  };

  return (
    <div>
      <ul className="row">
        {products.map(product => (
          <li className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <div className="d-grid gap-2">
                  {isAddedToCart(product.id) ? (
                    <button onClick={() => handleRemoveFromCart(product.id)} className="btn btn-danger">
                      Remove from Cart
                    </button>
                  ) : (
                    <button onClick={() => handleAddToCart(product)} className="btn btn-primary">
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;