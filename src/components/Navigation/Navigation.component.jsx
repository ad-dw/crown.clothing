import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/crown.svg";
import "./Navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/User.context";
import { signOutUser } from "../../utils/Firebase/firebase.utils";

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);
  const handleSignout = async () => {
    await signOutUser();
    setUser(null);
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
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
