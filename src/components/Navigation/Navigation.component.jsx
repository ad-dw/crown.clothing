import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/crown.svg";
import "./Navigation.styles.scss";
import { signOutUser } from "../../utils/Firebase/firebase.utils";
import ShoppingIcon from "../ShoppingIcon/ShoppingIcon.component";
import { useSelector } from "react-redux";
import { userSelector } from "../../reduxStore/User/UserSelector";

const Navigation = () => {
  const user = useSelector(userSelector);
  const handleSignout = async () => {
    await signOutUser();
  };
  return (
    <>
      <nav className="navigation">
        <Link to="/" title="Homepage logo">
          <div className="logo-container">
            <img src={logo} alt="Homepage logo" className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop" title="Shop">
            SHOP
          </Link>
          {user ? (
            <span className="nav-link" title="Sign out" onClick={handleSignout}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth" title="Auth">
              SIGN IN
            </Link>
          )}
          <ShoppingIcon />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
