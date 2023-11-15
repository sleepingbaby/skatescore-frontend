import React from "react";

export const TableHeader = ({ keys }) => (
  <thead className="text-xs text-white uppercase dark:bg-accent">
    {keys.length > 0 && (
      <tr className="h-10">
        {keys.map((key: string, index: number) => (
          <th
            key={index}
            className={`${
              index === 0
                ? "rounded-tl-md"
                : index === keys.length - 1
                ? "rounded-tr-md"
                : ""
            }`}
          >
            {key}
          </th>
        ))}
      </tr>
    )}
  </thead>
);

interface Data {
  firstName: string;
}

export const TableBody = ({ Data }: { Data: Data[] }) => (
  <tbody>
    {Data.map((row, rowIndex) => (
      <tr key={rowIndex} className="hover:bg-gray-200 h-[48px]">
        {Object.values(row).map((cell, cellIndex) => (
          <td key={cellIndex} className="min-w-[120px] text-center py-2">
            <small>{cell}</small>
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);
