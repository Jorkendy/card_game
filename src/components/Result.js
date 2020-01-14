import React from "react";
import { Row, Col, Table } from "antd";

const Result = () => {
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

  return (
    <Row gutter={[15, 15]}>
      <Col span={4}>Win:</Col>
      <Col span={20}>0</Col>
      <Col span={4}>Lose:</Col>
      <Col span={20}>0</Col>
      <Col span={4}>Best time:</Col>
      <Col span={20}>
        <Table columns={columns} dataSource={[]} />
      </Col>
    </Row>
  );
};

export default Result;
