import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <ThreeDots
        height="60"
        width="60"
        radius="8"
        color="#d8bc20"
        ariaLabel="loading"
      />
      <p
        style={{
          marginTop: "16px",
          color: "#666",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
        }}
      >
        Загрузка...
      </p>
    </div>
  );
}
