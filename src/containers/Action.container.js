import { connect } from "react-redux";

import Action from "../components/Action";
import { onSetLevel } from "../actions/App.action";

const mapStateToProps = state => {
  const { App } = state;

  return {
    level: App.level
  };
};

const mapDispatchToProps = {
  onSetLevel
};

export default connect(mapStateToProps, mapDispatchToProps)(Action);
