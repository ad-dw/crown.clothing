import "./Category.styles.scss";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ background: `url(${category.imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <Link
          to={`shop/${category.title}`}
          aria-label={`go to ${category.title} section`}
        >
          <h2>{category.title}</h2>
          <p>SHOP NOW</p>
        </Link>
      </div>
    </div>
  );
};

export default Category;
