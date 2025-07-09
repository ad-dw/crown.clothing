import "./WardrobeCategory.styles.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../context/Categories.context";
import { useParams } from "react-router-dom";
import CategoryPreview from "../CategoryPreview/CategoryPreview.component";
import Spinner from "../Spinner/Spinner.component";

const WardrobeCategory = () => {
  const { categories, isLoading } = useContext(CategoriesContext);
  let { category } = useParams();
  let categoryData = categories[category];
  console.log(isLoading);
  return isLoading ? (
    <Spinner />
  ) : (
    <CategoryPreview title={category} products={categoryData} />
  );
};

export default WardrobeCategory;
