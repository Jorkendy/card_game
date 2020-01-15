import React, { memo } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";
import FlipCard from "@dragonza/react-flip-card";

const Content = ({ matrix, size, onToggleFlip }) => {
  const _onCardClick = id => () => {
    const flipedItem = matrix.filter(item => item.isFlip && !item.isOpen);
    if (flipedItem.length === 2) {
      return;
    }
    onToggleFlip(id);
  };

  return matrix.length > 0 ? (
    <Row gutter={[15, 15]}>
      {matrix.map((item, index) => (
        <Col key={index} xs={24 / size}>
          {item.isFlip && item.isOpen ? (
            <Card />
          ) : (
            <FlipCard
              cardContainerStyle={{
                color: "white",
                padding: "10px"
              }}
              flipped={item.isFlip}
              onCardClick={_onCardClick(item.id)}
              backContent={<Card>{item.name}</Card>}
              frontContent={<Card />}
              height="100px"
              width="100%"
            />
          )}
        </Col>
      ))}
    </Row>
  ) : null;
};

Content.propTypes = {
  matrix: PropTypes.array,
  size: PropTypes.number
};

Content.defaultProps = {
  size: 1,
  matrix: []
};

export default memo(Content);

const Card = styled(Col)`
  height: 100px;
  display: flex;
  font-size: 32px;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #000; */
`;
