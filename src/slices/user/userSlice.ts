import { createSlice } from '@reduxjs/toolkit';
import { Language } from '@/types/enum';

export interface UserSlice {
  language: Language;
}

const initialState: UserSlice = {
  language: Language.EN
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.language = Language.EN;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment } = userSlice.actions;

export default userSlice.reducer;
