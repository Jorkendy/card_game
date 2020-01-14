import React from "react";
import { Icon } from "antd";
import styled from "styled-components";

const Timer = () => {
  return (
    <>
      <CustomIcon type="clock-circle" />
      Time remaining: 01:06
    </>
  );
};

export default Timer;

const CustomIcon = styled(Icon)`
  margin-right: 5px;
`;
