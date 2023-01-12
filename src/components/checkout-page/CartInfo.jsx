import { useState, useEffect } from "react";

import styles from "./CartInfo.module.css";

function CartInfo() {
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
  console.log(items);

  const totalCartItemsPrice = items.reduce((acc, obj) => {
    return acc + obj.price;
  }, 0);

  console.log(totalCartItemsPrice);

  return (
    <>
      {isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.spinner}></div>
        </div>
      )}
      {error && (
        <section className={styles.errorSection}>
          <p>{error}</p>
        </section>
      )}
      <div className={styles.cartInfo}>
        <h4>Order Summary</h4>
        <div className={styles.cartItemsContainer}>
          {items.map((item) => {
            return (
              <div className={styles.cartItems} key={item.id}>
                <img src={item.imgUrl} alt={item.name} />
                <div>
                  <h4 className={styles.title}>{item.name}</h4>
                  <span className={styles.details}>{item.description}</span>
                </div>
                <p>$ {item.price}</p>
              </div>
            );
          })}
        </div>
        <form className={styles.voucherForm}>
          <input type="text" placeholder="Add coupon or voucher" />
          <button>Apply</button>
        </form>
        <div className={styles.total}>
          <p className={styles.bold}>TOTAL</p>
          <p>$ {totalCartItemsPrice}</p>
        </div>
      </div>
    </>
  );
}

export default CartInfo;
