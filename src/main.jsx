import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App.jsx";
import { CartContextProvider } from "./context/Cart.context.jsx";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { reduxStore } from "./reduxStore/reduxStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={reduxStore}>
        {/* <PersistGate persistor={persistor}> */}
        <CartContextProvider>
          <App />
        </CartContextProvider>
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
