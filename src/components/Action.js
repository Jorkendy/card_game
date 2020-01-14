import React from "react";
import styled from "styled-components";
import { Select, Button } from "antd";

const { Option } = Select;

const Action = ({ level, setLevel }) => {
  const _onLevelChange = newLevel => {
    setLevel(newLevel);
  };

  return (
    <>
      <CustomSelect
        value={level}
        style={{ width: 120 }}
        placeholder="Select level"
        onChange={_onLevelChange}
      >
        <Option value="1">Easy</Option>
        <Option value="2">Normal</Option>
        <Option value="3">Hard</Option>
      </CustomSelect>
      <Button>Start</Button>
    </>
  );
};

export default Action;

const CustomSelect = styled(Select)`
  width: 120px;
  margin-right: 15px;
`;
