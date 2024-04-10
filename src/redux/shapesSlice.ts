import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type TShape } from 'types';

interface ShapesState {
  data: TShape[];
}

const initialState: ShapesState = {
  data: []
};

export const shapesSlice = createSlice({
  name: 'shapes',
  initialState,
  reducers: {
    addShapeToData: (state, action: PayloadAction<TShape>) => {
      state.data.push(action.payload);
    },
    addShapesToData: (state, action: PayloadAction<TShape[]>) => {
      state.data = state.data.concat(action.payload);
    },
    removeShapeFromData: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(shape => shape.properties.id !== action.payload);
    }
  }
});

export const { addShapeToData, addShapesToData, removeShapeFromData } = shapesSlice.actions;

export default shapesSlice.reducer;
