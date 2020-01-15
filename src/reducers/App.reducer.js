import { AppType } from "../actions/App.action";

const initialState = {
  matrix: [],
  win: 0,
  lose: 0,
  isComplete: false,
  achievement: [
    { level: 1, time: 0 },
    { level: 2, time: 0 },
    { level: 3, time: 0 }
  ],
  level: undefined
};

const App = (state = initialState, action) => {
  switch (action.type) {
    case AppType.Start:
      return {
        ...state,
        matrix: action.data
      };
    case AppType.ToggleFlip:
      return {
        ...state,
        matrix: state.matrix.map(item => ({
          ...item,
          ...(item.id === action.id ? { isFlip: !item.isFlip } : {})
        }))
      };
    case AppType.Open:
      return {
        ...state,
        matrix: state.matrix.map(item => ({
          ...item,
          ...(action.openedArray.includes(item.id) ? { isOpen: true } : {})
        }))
      };
    case AppType.Reset:
      return {
        ...state,
        matrix: [],
        isComplete: false
      };
    case AppType.IncreaseWin:
      return {
        ...state,
        win: state.win + 1,
        achievement: state.achievement.map(item => {
          if (+item.level === +state.level) {
            item.time =
              item.time < action.time || item.time === 0
                ? action.time
                : item.time;
          }
          return item;
        })
      };
    case AppType.IncreaseLose:
      return {
        ...state,
        lose: state.lose + 1
      };
    case AppType.SetLevel:
      return {
        ...state,
        level: action.level
      };
    default:
      return state;
  }
};

export default App;
