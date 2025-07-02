import "./Category.styles.scss";

const Category = ({ category }) => {
  return (
    <div
      className="category-container"
      tabIndex="0"
      aria-label={`${category.title} category`}
    >
      <div
        className="background-image"
        style={{ background: `url(${category.imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default Category;
