import React from "react";
import styled from "styled-components";
import Sticker from "./Sticker";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const StickerList = ({ stickers, onSelect }) => {
  return (
    <Grid>
      {stickers.map((sticker, index) => (
        <Sticker
          key={index}
          img={sticker.img}
          label={sticker.label}
          onClick={onSelect}
        />
      ))}
    </Grid>
  );
};

export default StickerList;
