import NavBar from "./components/nav-bar/NavBar";
import Page from "./components/checkout-page/Page";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <NavBar />;
      <Page />
    </CartProvider>
  );
}

export default App;
