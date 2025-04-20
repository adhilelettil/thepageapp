
import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cart');
    if (storedCartItems) {
      try {
        const parsedCartItems = JSON.parse(storedCartItems);
        if (Array.isArray(parsedCartItems)) {
          setCartItems(parsedCartItems);
        } else {
          console.error('Stored cart items are not an array');
        }
      } catch (error) {
        console.error('Error parsing stored cart items:', error);
      }
    }
  }, []);

  function handleRemoveItem(index: number): void {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
  }

  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div></div>
          {cartItems.map((item, index) => (
            <div key={index} style={{ display: 'flex', marginBottom: '20px' }}>
              <div  >
                {item.image && item.image[0] && <img src={item.image[0].url} style={{ height: "300px" }} alt={item.name} />}
                <button className="btn btn-danger" style={{ marginBottom: "20px",marginTop:"-300px",marginRight:"100px" }} onClick={() => handleRemoveItem(index)}>Remove</button>
              

          
              </div>
            <div>
            <div className='titl'><h2>{item.name}</h2></div><br />
            <div className='pric'><h2>{item.price}</h2></div>
           </div>  
            
            </div>
            
          ))}
         
        </div>
      )}
    </div>
  );
}