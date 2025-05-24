import "./Category.styles.scss";

const Category = ({ category }) => {
  return (
    <div className="category-container">
      <div className="category-body-container">
        <h2>{category.name}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default Category;
