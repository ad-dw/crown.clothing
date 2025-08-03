import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Categories from "./components/Categories/Categories.component";
import Navigation from "./components/Navigation/Navigation.component";
import Shop from "./routes/Shop/Shop.component";
import Authentication from "./routes/Authentication/Authentication.component";
import CheckoutPage from "./routes/Checkout/CheckoutPage.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onUserAuthStatChanged } from "./utils/Firebase/firebase.utils";
import { setCurrentUser } from "./reduxStore/User/UserSlice";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onUserAuthStatChanged((user) =>
      dispatch(setCurrentUser(user))
    );
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Categories categories={categories} />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
