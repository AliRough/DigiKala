import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: {
    value: false,
  },
  reducers: {
    isLoadingOn: (state, action) => {
        console.log(action.payload);
        

            state.value = !state.value
        
    },
  }, 
});
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 5000);
// };
export const { isLoadingOn } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
