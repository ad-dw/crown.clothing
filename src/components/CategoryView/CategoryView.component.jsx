import "./CategoryView.styles.scss";
import ProductCard from "../ProductCard/ProductCard.component.jsx";
import Spinner from "../Spinner/Spinner.component.jsx";

const CategoryView = ({ title, products, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    products && (
      <div className="category-view-container">
        <h2>
          <span className="category-title">{title.toUpperCase()}</span>
        </h2>
        <div className="view">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    )
  );
};

export default CategoryView;
