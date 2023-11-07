import React from "react";

interface PlayerChipProps {
  first_name: string;
  last_name: string;
  number: number;
}

const PlayerChip = ({ first_name, last_name, number }: PlayerChipProps) => {
  const color = selectColor(first_name);
  return (
    <div
      className={`flex items-center text-black p-8 space-x-12 w-80 h-16 rounded-lg border border-black`}
    >
      <div
        style={{ backgroundColor: color }}
        className="rounded-full py-2 px-4"
      >
        #{number}
      </div>
      <div style={{ color: color }} className="font-medium w-56">
        {first_name + " " + last_name}
      </div>
    </div>
  );
};

export default PlayerChip;

const selectColor = (str: string) => {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = hash * 137.508; // use golden angle approximation
  return `hsl(${hue},40%,50%)`;
};
