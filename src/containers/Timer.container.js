import { connect } from "react-redux";

import Timer from "../components/Timer";

const mapStateToProps = state => {
  const { Timer } = state;

  return {
    time: Timer.time
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
