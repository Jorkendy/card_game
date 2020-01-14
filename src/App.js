import React, { useState } from "react";
import styled from "styled-components";
import { Select, Button, Row, Col, Table, Icon } from "antd";

import { Container } from "./utils";

const { Option } = Select;

const App = () => {
  const [level, setLevel] = useState(undefined);
  const columns = [
    {
      title: "Easy",
      dataIndex: "1",
      key: "1",
      render: () => <>--:--</>
    },
    {
      title: "Normal",
      dataIndex: "2",
      key: "2",
      render: () => <>--:--</>
    },
    {
      title: "Hard",
      dataIndex: "3",
      key: "3",
      render: () => <>--:--</>
    }
  ];

  const _onLevelChange = newLevel => {
    setLevel(newLevel);
  };

  return (
    <Container>
      <Action>
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
      </Action>
      <Result>
        <Col span={4}>Win:</Col>
        <Col span={20}>0</Col>
        <Col span={4}>Lose:</Col>
        <Col span={20}>0</Col>
      </Result>
      <Statistic>
        <Col span={4}>Best time:</Col>
        <Col span={20}>
          <Table columns={columns} dataSource={[]} />
        </Col>
      </Statistic>
      <Main>
        <Timer>
          <CustomIcon type="clock-circle" />
          Time remaining: 01:06
        </Timer>
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
          <Col span={4}>
            <Card />
          </Col>
          <Col span={4}>
            <Card />
          </Col>
        </Row>
      </Main>
    </Container>
  );
};

export default App;

const Action = styled.div`
  margin-bottom: 15px;
`;

const CustomSelect = styled(Select)`
  width: 120px;
  margin-right: 15px;
`;

const Result = styled(Row)`
  margin-bottom: 15px;
`;

const Statistic = styled(Row)`
  margin-bottom: 15px;
`;

const Main = styled.div``;

const CustomIcon = styled(Icon)`
  margin-right: 5px;
`;

const Timer = styled(Row)`
  margin-bottom: 15px;
`;

const Card = styled(Col)`
  height: 100px;
  background: red;
`;
