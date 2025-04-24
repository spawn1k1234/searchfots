import React, { useState } from "react";
import styled from "styled-components";
import stickers from "./data/stickers.json";
import StickerList from "./components/StickerList";
import Choice from "./components/Choice";

const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const App = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (label) => {
    setSelected(label);
  };

  return (
    <Container>
      <Title>Sticker App</Title>
      <StickerList stickers={stickers} onSelect={handleSelect} />
      <Choice selected={selected} />
    </Container>
  );
};

export default App;
