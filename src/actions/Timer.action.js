export const TimerType = {
  Descrease: "Descrease timer",
  Set: "Set timer"
};

const onDescrease = () => ({ type: TimerType.Descrease });

const onSet = time => ({ type: TimerType.Set, time });

export const onDescreaseTimer = callback => {
  return (dispatch, getState) => {
    dispatch(onDescrease());
    const currentTime = getState().Timer.time;
    const matrix = getState().App.matrix;
    const isComplete =
      matrix.length ===
      matrix.filter(item => item.isFlip && item.isOpen).length;
    callback && callback({ currentTime, isComplete });
  };
};

export const onSetTimer = (time, callback) => {
  return dispatch => {
    dispatch(onSet(time));
    callback && callback();
  };
};
