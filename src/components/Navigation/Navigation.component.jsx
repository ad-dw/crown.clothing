import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/crown.svg";
import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <Link to="/">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
