import React, { useState } from "react";

import { Container, Section, Levels } from "./utils";
import Components from "./components";
import ComponentsContainer from "./containers";

const { Action, Result, Timer } = Components;
const { Content } = ComponentsContainer;

const App = ({ onStart }) => {
  const [level, setLevel] = useState(undefined);
  const [size, setSize] = useState(1);

  const _onLevelChange = newLevel => {
    setLevel(newLevel);
  };

  const _onStart = () => {
    const selectedLevel = Levels.find(item => +item.id === +level);
    if (selectedLevel) {
      onStart(selectedLevel.size);
      setSize(selectedLevel.size)
    }
  };

  return (
    <Container>
      <Section>
        <Action
          level={level}
          onLevelChange={_onLevelChange}
          onStart={_onStart}
        />
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
