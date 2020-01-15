import { connect } from "react-redux";

import Result from "../components/Result";

const mapStateToProps = state => {
  const { App } = state;

  return {
    win: App.win,
    lose: App.lose,
    achievement: App.achievement
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
