import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App.jsx";
import { UserContextProvider } from "./context/User.context.jsx";
import { CartContextProvider } from "./context/Cart.context.jsx";
import { ProductContextProvider } from "./context/Products.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
);
