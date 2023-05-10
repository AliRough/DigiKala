import {
  createSlice,
  nanoid,
  createAsyncThunk,
  createEntityAdapter,
  current,
  createSelector,
} from "@reduxjs/toolkit";
import {
  createCard,
  deleteCard,
  getAllCards,
  updateCard,
} from "../../services/serving";

const cardAdaptor = createEntityAdapter();

const initialState = cardAdaptor.getInitialState();

export const fetchCards = createAsyncThunk("/cards/fetchCards", async () => {
  const response = await getAllCards();
  return response.data;
});

export const updateApiCard = createAsyncThunk(
  "/cards/updateApiCard",
  async (initialCard) => {
    const response = await updateCard(initialCard, initialCard.id);
    console.log(response.data);

    return response.data;
  }
);

export const deleteApiCard = createAsyncThunk(
  "/cards/deleteApiCard",
  async (initialCardId) => {
    await deleteCard(initialCardId);
    return initialCardId;
  }
);

export const addNewCard = createAsyncThunk(
  "/cards/addNewCard",
  async (initialCard) => {
    const response = await createCard(initialCard);
    return response.data;
  }
);

const cardsSlice = createSlice({
  name: "Cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = "completed";
        cardAdaptor.upsertMany(state, action.payload);
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewCard.fulfilled, cardAdaptor.addOne)
      .addCase(deleteApiCard.fulfilled, cardAdaptor.removeOne)
      .addCase(updateApiCard.fulfilled, cardAdaptor.updateOne);
  },
});

export const {
  selectAll: selectAllCards,
  selectById: selectCardById,
  selectIds: selectCardIds,
} = cardAdaptor.getSelectors((state) => state.Cards);

  

export const { cardAdded, cardUpdated, cardDeleted /*reactionAdded*/ } =
  cardsSlice.actions;

export default cardsSlice.reducer;
