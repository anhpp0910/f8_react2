import { SET_TASK, ADD_TASK, DELETE_TASK } from "./constant";

// useReducer
// 1. Init state
export const initState = {
  task: "",
  tasks: [],
};

// 3. Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        task: action.payload,
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload),
      };

    default:
      throw new Error("Invalid action");
  }
};

export default reducer;
