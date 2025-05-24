import "./App.scss";
import Categories from "./components/Categories/Categories.component";

const categories = [
  {
    id: 1,
    name: "Sneakers",
  },
  {
    id: 2,
    name: "Joggers",
  },
  {
    id: 3,
    name: "Jackets",
  },
  {
    id: 4,
    name: "Mens",
  },
  {
    id: 5,
    name: "Womens",
  },
];

function App() {
  return <Categories categories={categories} />;
}

export default App;
