import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const cartItems = []
  const [cartPrice, setCartPrice] = useState(0)
  const addToCart = (newItemName, newItemPrice) => {setCartPrice(cartPrice + newItemPrice)}
 
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <div className="BakeryItem">
            <BakeryItem 
              index={index} 
              image={item.image} 
              price={item.price} 
              cartPrice={cartPrice}
              addToCart={addToCart}
            />
          </div>
      ))}

    
        <h2>Cart</h2>
        Price: {cartPrice}
        {cartItems.map((item) => (

          <div classname="cartItem">
            item
          </div>

        ))}
    </div>
  );
}

export default App;
