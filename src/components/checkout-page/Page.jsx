import React from "react";
import Form from "./Form.jsx";
import CartInfo from "./CartInfo.jsx";

import styles from "./Page.module.css";

function Page() {
  return (
    <>
      <div className={styles.container}>
        <h2>Payment Information</h2>
        <section className={styles.page}>
          <Form />
          <CartInfo />
        </section>
      </div>
    </>
  );
}

export default Page;
