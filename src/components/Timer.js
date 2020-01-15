import React from "react";
import { Icon } from "antd";
import styled from "styled-components";

import { parseSecondsToTime } from "../utils";

const Timer = ({ time }) => {
  return (
    <>
      <CustomIcon type="clock-circle" />
      Time remaining: {parseSecondsToTime(time)}
    </>
  );
};

export default Timer;

const CustomIcon = styled(Icon)`
  margin-right: 5px;
`;
