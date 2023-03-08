import { products, TotalProducts } from "../../data/Products";


const INITIAL_STATE = {
  products: products,
  totalProducts: TotalProducts,
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    default:
      return state;
  }
};

// const productsSlice = createSlice({
//   name: 'products',
//   initialState: INITIAL_STATE,
//   reducers:{
//     filters: (state, id) => {
      
//     },
//     addToCart: (state, id) => {
      
//     },
//     onSubmit: (state, action) => {
//      state.products = action.payload
//     }
//   }
// })

// export const productsReducer = productsSlice.reducer;

// export const { filters, addToCart, onSubmit } = productsSlice.actions;


export default productsReducer;