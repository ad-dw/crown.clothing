import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview.component";
import { Routes, Route } from "react-router-dom";
import WardrobeCategory from "../../components/WardrobeCategory/WardrobeCategory.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<WardrobeCategory />} />
    </Routes>
  );
};

export default Shop;
