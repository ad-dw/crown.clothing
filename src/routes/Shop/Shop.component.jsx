import "./Shop.styles.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../context/Categories.context";
import CategoryPreview from "../../components/CategoriesPreview/CategoriesPreview.component";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  return Object.keys(categories).map((category, _idx) => {
    return (
      <CategoryPreview
        key={category + _idx}
        title={category}
        products={categories[category]}
      />
    );
  });
};

export default Shop;
