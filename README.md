# Paradise Nursery

Paradise Nursery is a React + Redux shopping cart application for an online
plant shop. It lets customers browse houseplants across three categories,
view each plant's thumbnail, name, and price, add plants to a shopping cart,
and manage cart items (adjust quantities, remove items, and see the running
total) before checking out.

## Project structure

- `src/App.jsx` / `src/App.css` — the landing page (company name, background,
  "Get Started" button)
- `src/AboutUs.jsx` / `src/AboutUs.css` — company details shown on the landing
  page
- `src/ProductList.jsx` / `src/ProductList.css` — the product listing page,
  including the navbar and "Add to Cart" functionality
- `src/CartItem.jsx` / `src/CartItem.css` — the shopping cart page
- `src/CartSlice.jsx` — the Redux Toolkit slice (`addItem`, `removeItem`,
  `updateQuantity`) that manages cart state
- `src/store.js` — the Redux store configuration
- `src/productsData.js` — the plant catalog data

## Getting started

```
npm install
npm start
```

The app runs at http://localhost:3000.
