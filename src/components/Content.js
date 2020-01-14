import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const Content = () => {
  return (
    <Row gutter={[15, 15]}>
      <Col span={4}>
        <Card />
      </Col>
      <Col span={4}>
        <Card />
      </Col>
      <Col span={4}>
        <Card />
      </Col>
      <Col span={4}>
        <Card />
      </Col>
    </Row>
  );
};

export default Content;

const Card = styled(Col)`
  height: 100px;
  background: red;
`;
