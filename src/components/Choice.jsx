import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Text = styled.h2`
  color: #333;
`;

const Choice = ({ selected }) => {
  return (
    <Box>
      {selected ? (
        <Text>Вибрано: {selected}</Text>
      ) : (
        <Text>Виберіть стікер</Text>
      )}
    </Box>
  );
};

export default Choice;
