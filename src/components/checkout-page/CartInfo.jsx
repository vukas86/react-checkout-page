import { useContext } from "react";
import CartContext from "../../CartContext";

import styles from "./CartInfo.module.css";

function CartInfo() {
  const [items, setItems, isLoading, setIsLoading, error, setError] =
    useContext(CartContext);

  const totalCartItemsPrice = items.reduce((acc, obj) => {
    return acc + obj.price;
  }, 0);

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
