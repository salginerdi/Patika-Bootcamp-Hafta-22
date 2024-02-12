import './App.css'
import { useState } from 'react';

  

const products = [
  { name: "Time Machine", price: 1000000000 },
  { name: "Personal Island", price: 50000000 },
  { name: "Jetpack", price: 1000000 },
  { name: "Big Mac", price: 2 },
  { name: "Football Team", price: 2000000 },
];

const App = () => {
  const [balance, setBalance] = useState(100000000000);
  const [cart, setCart] = useState([]);

  const handleBuy = (product) => {
    if (balance >= product.price) {
      setBalance(balance - product.price);
      setCart([...cart, product]);
    } else {
      alert("Insufficient funds!");
    }
  };

  const handleSell = (index) => {
    const updatedCart = [...cart];
    const soldProduct = updatedCart.splice(index, 1)[0];
    setBalance(balance + soldProduct.price);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Bill Gates $100,000,000,000 Spending Spree</h1>
      <h2>Balance: ${balance.toLocaleString()}</h2>
      <div>
        <h3>Products:</h3>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price.toLocaleString()} 
              <button onClick={() => handleBuy(product)} disabled={balance < product.price}>Buy</button>
              <button onClick={() => handleSell(index)} disabled={!cart.some(item => item === product)}>Sell</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Cart:</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price.toLocaleString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;


