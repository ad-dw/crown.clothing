import "./Shop.styles.scss";
import { ProductContext } from "../../context/Products.context";
import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.component";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
