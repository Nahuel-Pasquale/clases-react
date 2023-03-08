import { products } from "../../data/Products";

const INITIAL_STATE = {
  recommended: Array(4)
    .fill(0)
    .reduce((acc, _item) => {
      const IDs = acc.map(value => value.id);
      console.log('IDs ==> ', IDs);
      let newRecommended;
        do {
          console.log('Math.floor(Math.random() * products.length) ==> ', Math.floor(Math.random() * products.length));
          newRecommended = {
            ...products[Math.floor(Math.random() * products.length)],
          };
          console.log('IDs.includes(newRecommended.id) ==> ', IDs.includes(newRecommended.id), newRecommended.id);
        } while (IDs.includes(newRecommended.id));
        return [...acc, newRecommended];
    }, []),
};

const recommendedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    default:
      return state;
  }
};

export default recommendedReducer;