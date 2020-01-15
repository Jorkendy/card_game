import { TimerType } from "../actions/Timer.action";

const initialState = {
  time: 0
};

const Timer = (state = initialState, action) => {
  switch (action.type) {
    case TimerType.Set:
      return {
        ...state,
        time: action.time
      };
    case TimerType.Descrease:
      return {
        ...state,
        time: state.time - 1
      };
    default:
      return state;
  }
};

export default Timer;
