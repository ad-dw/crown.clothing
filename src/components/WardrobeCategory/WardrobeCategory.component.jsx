import "./WardrobeCategory.styles.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../context/Categories.context";
import { useParams } from "react-router-dom";
import CategoryView from "../CategoryView/CategoryView.component";
import Spinner from "../Spinner/Spinner.component";

const WardrobeCategory = () => {
  const { categories, isLoading } = useContext(CategoriesContext);
  let { category } = useParams();
  let categoryData = categories[category];
  return isLoading ? (
    <Spinner />
  ) : (
    <CategoryView title={category} products={categoryData} />
  );
};

export default WardrobeCategory;
