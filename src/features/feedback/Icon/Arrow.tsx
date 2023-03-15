import React from "react";

export const ArrowUp = ({
  fill = "none",
  stroke = "#4661E6",
}: {
  fill?: string;
  stroke?: string;
}) => {
  return (
    <svg width='10' height='7'>
      <path
        d='M1 6l4-4 4 4'
        stroke={stroke}
        strokeWidth='2'
        fill={fill}
        fillRule='evenodd'
      />
    </svg>
  );
};

export const ArrowDown = ({
  fill = "none",
  stroke = "#4661E6",
}: {
  fill?: string;
  stroke?: string;
}) => {
  return (
    <svg width='10' height='7'>
      <path
        d='M1 1l4 4 4-4'
        stroke={stroke}
        strokeWidth='2'
        fill={fill}
        fillRule='evenodd'
      />
    </svg>
  );
};
