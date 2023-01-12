import React from "react";
import logo from "../../assets/logos/Smart Store-logos_white.png";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.left}>
        <a href="#">
          <img src={logo} alt="" className={styles.logo} />
        </a>
        <span>Checkout</span>
      </div>
      <div className={styles.right}>
        <a href="#">Return to Cart</a>
      </div>
    </nav>
  );
}

export default NavBar;
