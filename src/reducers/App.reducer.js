import { AppType } from "../actions/App.action";

const initialState = {
  matrix: []
};

const App = (state = initialState, action) => {
  switch (action.type) {
    case AppType.Start:
      return {
        matrix: action.data
      };
    case AppType.ToggleFlip:
      return {
        matrix: state.matrix.map(item => ({
          ...item,
          ...(item.id === action.id ? { isFlip: !item.isFlip } : {})
        }))
      };
    case AppType.Open:
      return {
        matrix: state.matrix.map(item => ({
          ...item,
          ...(action.openedArray.includes(item.id) ? { isOpen: true } : {})
        }))
      };
    default:
      return state;
  }
};

export default App;
