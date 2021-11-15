export const titleName = (title) => {
  const T = title.split(" ");
  return `${T[0]}  ${T[1]}`;
};

export const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

export const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quntity;
  }
};
