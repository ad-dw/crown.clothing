export const categoriesSelector = (state) => {
  return state.categories.categoriesRawData.reduce((acc, catgory) => {
    const { title, items } = catgory;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
