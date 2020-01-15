import { generateMatrix } from "../utils";

export const AppType = {
  Start: "Start game",
  ToggleFlip: "Toggle flip",
  Open: "Open",
  Reset: "Reset",
  IncreaseWin: "Increase win",
  IncreaseLose: "Increase lose",
  SetLevel: "Set level"
};

const startGame = data => ({ type: AppType.Start, data });

const toggleFlip = id => ({ type: AppType.ToggleFlip, id });

const open = openedArray => ({ type: AppType.Open, openedArray });

const reset = () => ({ type: AppType.Reset });

const increaseWin = time => ({ type: AppType.IncreaseWin, time });

const increaseLose = time => ({ type: AppType.IncreaseLose, time });

const setLevel = level => ({ type: AppType.SetLevel, level });

export const onStart = size => {
  return dispatch => {
    dispatch(
      startGame(
        generateMatrix(size * size).map((item, index) => ({
          name: item,
          id: index,
          isFlip: false,
          isOpen: false
        }))
      )
    );
  };
};

export const onToggleFlip = (id, callback) => {
  return (dispatch, getState) => {
    dispatch(toggleFlip(id));
    const flipedItem = getState().App.matrix.filter(
      item => item.isFlip && !item.isOpen
    );
    if (flipedItem.length === 2) {
      setTimeout(() => {
        if (flipedItem[0].name !== flipedItem[1].name) {
          dispatch(toggleFlip(flipedItem[0].id));
          dispatch(toggleFlip(flipedItem[1].id));
        } else {
          dispatch(open(flipedItem.map(item => item.id)));
        }
        callback && callback();
      }, 2000);
    }
  };
};

export const onReset = () => {
  return dispatch => {
    dispatch(reset());
  };
};

export const onIncreaseWin = () => {
  return (dispatch, getState) => {
    dispatch(increaseWin(getState().Timer.time));
  };
};

export const onIncreaseLose = () => {
  return (dispatch, getState) => {
    dispatch(increaseLose(getState().Timer.lose));
  };
};

export const onSetLevel = level => {
  return (dispatch) => {
    dispatch(setLevel(level));
  };
}