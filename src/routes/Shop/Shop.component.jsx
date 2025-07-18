import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview.component";
import { Routes, Route } from "react-router-dom";
import WardrobeCategory from "../../components/WardrobeCategory/WardrobeCategory.component";
import { getCategoriesAndDocuments } from "../../utils/Firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategories } from "../../reduxStore/Categories/CategoriesAction";
import { useEffect } from "react";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesData = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesMap));
    };
    getCategoriesData();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<WardrobeCategory />} />
    </Routes>
  );
};

export default Shop;
