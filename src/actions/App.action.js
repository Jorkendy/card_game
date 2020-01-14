import { generateMatrix } from "../utils";

export const AppType = {
  Start: "Start game",
  ToggleFlip: "Toggle flip",
  Open: "Open"
};

const startGame = data => ({ type: AppType.Start, data });

const toggleFlip = id => ({ type: AppType.ToggleFlip, id });

const open = openedArray => ({ type: AppType.Open, openedArray });

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
        callback &&
          callback({
            isMatched: flipedItem[0].name === flipedItem[1].name
          });
        if (flipedItem[0].name !== flipedItem[1].name) {
          dispatch(toggleFlip(flipedItem[0].id));
          dispatch(toggleFlip(flipedItem[1].id));
        } else {
          dispatch(open(flipedItem.map(item => item.id)));
        }
      }, 2000);
    } 
  };
};
