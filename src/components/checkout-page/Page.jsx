import { useContext } from "react";
import Form from "./Form.jsx";
import CartInfo from "./CartInfo.jsx";
import CartContext from "../../CartContext.jsx";

import styles from "./Page.module.css";

function Page() {
  const [items] = useContext(CartContext);

  const submitOrderHandler = (userData) => {
    fetch(
      "https://smart-store-23-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: items }),
      }
    );
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Payment Information</h2>
        <section className={styles.page}>
          <Form onConfirm={submitOrderHandler} />
          <CartInfo />
        </section>
      </div>
    </>
  );
}

export default Page;
