import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        "https://smart-store-23-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const resData = await res.json();

      const loadedCartItems = [];

      for (const key in resData) {
        loadedCartItems.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price,
          imgUrl: resData[key].image,
        });
      }
      setItems(loadedCartItems);
      setIsLoading(false);
    };

    fetchItems().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  return (
    <CartContext.Provider
      value={[items, setItems, isLoading, setIsLoading, error, setError]}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
