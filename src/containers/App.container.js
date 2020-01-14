import { connect } from "react-redux";

import App from "../App";
import { onStart } from "../actions/App.action";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = { onStart };

export default connect(mapStateToProps, mapDispatchToProps)(App);
