import React from "react";
import { Row, Col } from "antd";

import { parseSecondsToTime } from "../utils";

const Result = ({ win, lose, achievement }) => {
  return (
    <Row gutter={[15, 15]}>
      <Col span={4}>Win:</Col>
      <Col span={20}>{win}</Col>
      <Col span={4}>Lose:</Col>
      <Col span={20}>{lose}</Col>
      <Col span={4}>Best time:</Col>
      <Col span={20}>
        <table style={{ width: "50%" }}>
          <thead>
            <tr>
              <th>Easy</th>
              <th>Normal</th>
              <th>Hard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {achievement.find(item => item.level === 1) &&
                achievement.find(item => item.level === 1).time > 0 ? (
                  parseSecondsToTime(
                    achievement.find(item => item.level === 1).time
                  )
                ) : (
                  <>--:--</>
                )}
              </td>
              <td>
                {achievement.find(item => item.level === 2) &&
                achievement.find(item => item.level === 2).time > 0 ? (
                  parseSecondsToTime(
                    achievement.find(item => item.level === 2).time
                  )
                ) : (
                  <>--:--</>
                )}
              </td>
              <td>
                {achievement.find(item => item.level === 3) &&
                achievement.find(item => item.level === 3).time > 0 ? (
                  parseSecondsToTime(
                    achievement.find(item => item.level === 3).time
                  )
                ) : (
                  <>--:--</>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

export default Result;
