import { useContext, useState } from "react";
import Form from "./Form.jsx";
import CartInfo from "./CartInfo.jsx";
import CartContext from "../../CartContext.jsx";

import styles from "./Page.module.css";

function Page() {
  const [items] = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmitt, setDidSubmitt] = useState(false);

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://smart-store-23-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: items }),
      }
    );
    setIsSubmitting(false);
    setDidSubmitt(true);
  };

  const cartModalContent = (
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

  const isSubmittingContent = (
    <>
      <div className={styles.submittContainer}>
        <p>Sending order data, please stay on this page!</p>
      </div>
    </>
  );
  const didSubmitContent = (
    <>
      <div className={styles.submittContainer}>
        <p>Your order is succesfully submitted!</p>
      </div>
    </>
  );

  return (
    <>
      {!isSubmitting && !didSubmitt && cartModalContent}
      {isSubmitting && isSubmittingContent}
      {didSubmitt && didSubmitContent}
    </>
  );
}

export default Page;
