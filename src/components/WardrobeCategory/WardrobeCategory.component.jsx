import "./WardrobeCategory.styles.scss";
import { useParams } from "react-router-dom";
import CategoryView from "../CategoryView/CategoryView.component";
import { useSelector } from "react-redux";
import {
  categoriesLoading,
  categoriesSelector,
} from "../../reduxStore/Categories/CategoriesSelector";

const WardrobeCategory = () => {
  const categories = useSelector(categoriesSelector);
  const isLoading = useSelector(categoriesLoading);
  let { category } = useParams();
  let categoryData = categories[category];
  return (
    <CategoryView
      title={category}
      products={categoryData}
      isLoading={isLoading}
    />
  );
};

export default WardrobeCategory;
