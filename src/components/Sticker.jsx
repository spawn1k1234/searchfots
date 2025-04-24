import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  background: white;

  &:hover {
    border-color: #007bff;
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const Label = styled.p`
  text-align: center;
  font-weight: bold;
`;

const Sticker = ({ img, label, onClick }) => {
  return (
    <Card onClick={() => onClick(label)}>
      <Image src={img} alt={label} />
      <Label>{label}</Label>
    </Card>
  );
};

export default Sticker;
