import React, { useState } from "react";
import { Modal, Icon } from "antd";

import { Container, Section, Levels } from "./utils";
import Components from "./containers";

const { Content, Timer, Result, Action } = Components;
const { confirm } = Modal;

const App = ({
  onStart,
  onSetTimer,
  onDescreaseTimer,
  onReset,
  onIncreaseWin,
  onIncreaseLose,
  onSetLevel,
  level
}) => {
  const [size, setSize] = useState(1);

  const _onStart = () => {
    const selectedLevel = Levels.find(item => +item.id === +level);
    if (selectedLevel) {
      onStart(selectedLevel.size);
      setSize(selectedLevel.size);
      onSetTimer(selectedLevel.time, () => {
        const timer = setInterval(() => {
          onDescreaseTimer(({ currentTime, isComplete }) => {
            if (currentTime === 0) {
              clearInterval(timer);
              if (!isComplete) {
                onIncreaseLose();
                _onShowConfirmLose();
              }
            } else if (currentTime > -1 && isComplete) {
              clearInterval(timer);
              onIncreaseWin();
              _onShowConfirmWin();
            }
          });
        }, 1000);
      });
    }
  };

  const _onShowConfirmLose = () => {
    confirm({
      title: "Oops!!!",
      content: "You just ran out of time. Better luck next time.",
      okText: "Try again",
      cancelText: "Too hard? Try different level",
      icon: <Icon type="close-circle" theme="twoTone" twoToneColor="red" />,
      centered: true,
      onOk() {
        _onStart();
      },
      onCancel() {
        onSetLevel(undefined);
        onReset();
      }
    });
  };

  const _onShowConfirmWin = () => {
    confirm({
      title: "Congratulations!!!",
      content: "Your memory is still useful.",
      okText: "Try again",
      cancelText: "Too easy? Try different level",
      icon: <Icon type="check-circle" theme="twoTone" twoToneColor="green" />,
      centered: true,
      onOk() {
        _onStart();
      },
      onCancel() {
        onSetLevel(undefined);
        onReset();
      }
    });
  };

  return (
    <Container>
      <Section>
        <Action onStart={_onStart} />
      </Section>

      <Section>
        <Result />
      </Section>

      <Section>
        <Timer />
      </Section>

      <Section>
        <Content size={size} />
      </Section>
    </Container>
  );
};

export default App;
