import React, { useState } from "react";

import { Container, Section } from "./utils";
import Components from "./components";

const { Action, Result, Timer, Content } = Components;

const App = () => {
  const [level, setLevel] = useState(undefined);

  return (
    <Container>
      <Section>
        <Action level={level} setLevel={setLevel} />
      </Section>

      <Section>
        <Result />
      </Section>

      <Section>
        <Timer />
      </Section>

      <Section>
        <Content />
      </Section>
    </Container>
  );
};

export default App;
