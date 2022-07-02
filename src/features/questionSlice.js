import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "question",
  initialState: {
    questionId: null,
    questionName: null,
  },
  reducers: {
    setQuestionInfo: (state, action) => {
      state.questionId = action.payload.questionId;
      state.questionName = action.payload.questionName;
    },
  },
});
export const userSlice = createSlice({
  name: "users",
  initialState: {
    questionId: null,
    questionName: null,
  },
  reducers: {
    setuserInfo: (state, action) => {
      state.questionId = action.payload.questionId;
      state.questionName = action.payload.questionName;
    },
  },
});

export const { setQuestionInfo } = questionSlice.actions;
export const { setuserInfo } = questionSlice.actions;

export const selectQuestionId = (state) => state.question.questionId;
export const selectUserId = (state) => state.question.id;
export const selectQuestionName = (state) => state.question.questionName;
export const selectUserName = (state) => state.question.name;

export default questionSlice.reducer;
