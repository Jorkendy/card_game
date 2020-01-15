import { connect } from "react-redux";

import App from "../App";
import {
  onStart,
  onReset,
  onIncreaseWin,
  onIncreaseLose,
  onSetLevel
} from "../actions/App.action";
import { onSetTimer, onDescreaseTimer } from "../actions/Timer.action";

const mapStateToProps = state => {
  const { App, Timer } = state;

  return {
    isComplete: App.isComplete,
    time: Timer.time,
    level: App.level
  };
};

const mapDispatchToProps = {
  onStart,
  onSetTimer,
  onDescreaseTimer,
  onReset,
  onIncreaseWin,
  onIncreaseLose,
  onSetLevel
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
