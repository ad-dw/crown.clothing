import "./CategoriesPreview.styles.scss";
import CategoryPreview from "../CategoryPreview/CategoryPreview.component";
import {
  categoriesLoading,
  categoriesSelector,
} from "../../reduxStore/Categories/CategoriesSelector";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner.component";

const CategoriesPreview = () => {
  const isLoading = useSelector(categoriesLoading);
  const categories = useSelector(categoriesSelector);
  return isLoading ? (
    <Spinner />
  ) : (
    Object.keys(categories).map((category, _idx) => {
      return (
        <CategoryPreview
          key={category + _idx}
          title={category}
          products={categories[category].slice(0, 4)}
        />
      );
    })
  );
};

export default CategoriesPreview;
