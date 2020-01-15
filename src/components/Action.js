import React, { memo } from "react";
import styled from "styled-components";
import { Select, Button } from "antd";
import PropTypes from "prop-types";

import { Levels } from "../utils";

const { Option } = Select;

const Action = ({ level, onSetLevel, onStart }) => {
  return (
    <>
      <CustomSelect
        value={level}
        style={{ width: 120 }}
        placeholder="Select level"
        onChange={onSetLevel}
      >
        {Levels.map(item => (
          <Option value={item.id} key={item.id}>
            {item.name}
          </Option>
        ))}
      </CustomSelect>
      <Button onClick={onStart}>Start</Button>
    </>
  );
};

Action.propTypes = {
  level: PropTypes.oneOf([...Levels.map(item => item.id), undefined]),
  onLevelChange: PropTypes.func,
  onStart: PropTypes.func
};

Action.defaultProps = {
  level: undefined,
  onLevelChange: null,
  onStart: null
};

export default memo(Action);

const CustomSelect = styled(Select)`
  width: 120px;
  margin-right: 15px;
`;
