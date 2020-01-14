import { connect } from "react-redux";

import Content from "../components/Content";
import { onToggleFlip } from "../actions/App.action";

const mapStateToProps = state => {
  const { App } = state;

  return {
    matrix: App.matrix
  };
};

const mapDispatchToProps = { onToggleFlip };

export default connect(mapStateToProps, mapDispatchToProps)(Content);
