import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';
import { productsData, categories } from './productsData.js';
import { addItem } from './CartSlice.jsx';
import CartItem from './CartItem.jsx';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
  };

  const handleCartClick = () => setShowCart(true);
  const handlePlantsClick = () => setShowCart(false);
  const handleContinueShopping = () => setShowCart(false);

  return (
    <div className="product-page">
      <nav className="navbar">
        <span className="navbar__brand">🌿 Paradise Nursery</span>
        <div className="navbar__links">
          <button className="navbar__link" onClick={onHomeClick}>
            Home
          </button>
          <button className="navbar__link" onClick={handlePlantsClick}>
            Plants
          </button>
          <button className="navbar__link navbar__cart" onClick={handleCartClick}>
            🛒 Cart
            <span className="navbar__cart-count">{totalItemsInCart}</span>
          </button>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <main className="product-listing">
          {categories.map((category) => (
            <section key={category} className="product-category">
              <h2 className="product-category__title">{category}</h2>
              <div className="product-grid">
                {productsData
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <article key={product.id} className="product-card">
                      <img
                        className="product-card__thumbnail"
                        src={product.image}
                        alt={product.name}
                        width="140"
                        height="140"
                      />
                      <h3 className="product-card__name">{product.name}</h3>
                      <p className="product-card__price">${product.price}</p>
                      <button
                        className="product-card__button"
                        disabled={!!addedItems[product.id]}
                        onClick={() => handleAddToCart(product)}
                      >
                        {addedItems[product.id] ? 'Added' : 'Add to Cart'}
                      </button>
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default ProductList;
