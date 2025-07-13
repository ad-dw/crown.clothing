import "./CategoriesPreview.styles.scss";
import CategoryPreview from "../CategoryPreview/CategoryPreview.component";
import { categoriesSelector } from "../../reduxStore/Categories/CategoriesSelector";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const categories = useSelector(categoriesSelector);
  return Object.keys(categories).map((category, _idx) => {
    return (
      <CategoryPreview
        key={category + _idx}
        title={category}
        products={categories[category].slice(0, 4)}
      />
    );
  });
};

export default CategoriesPreview;
