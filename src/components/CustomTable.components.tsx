import React from "react";

interface Goals {
  first: number;
  second: number;
  third: number;
  overtime: boolean;
}

interface RowData {
  away_goals: Goals;
  away_team: string;
  date: string;
  game_id: number;
  home_goals: Goals;
  home_team: string;
  id: number;
  overtime: boolean;
  ref_1: string;
  ref_2: string;
  rink: string;
}

export const TableHeader = ({ keys }) => (
  <thead className="text-xs text-white uppercase dark:bg-accent">
    {keys.length > 0 && (
      <tr className="h-10">
        {keys.map((key: string, index: number) =>
          key === "overtime" ||
          key === "id" ||
          key === "game_id" ||
          key === "ref_1" ||
          key === "ref_2" ? null : (
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
          )
        )}
      </tr>
    )}
  </thead>
);

export const TableBody = ({ data }: { data: RowData[] }) => (
  <tbody>
    {data.map((row, rowIndex) => (
      <tr key={rowIndex} className="hover:bg-gray-200 h-[48px]">
        {Object.entries(row).map(([key, cell], cellIndex) =>
          key === "overtime" ||
          key === "id" ||
          key === "game_id" ||
          key === "ref_1" ||
          key === "ref_2" ? null : (
            <td key={cellIndex} className="min-w-[120px] text-center py-2">
              {key === "date" ? (
                <small>{new Date(row[key]).toLocaleDateString()}</small>
              ) : typeof cell !== "object" ? (
                <React.Fragment key={cellIndex}>
                  <small>{JSON.stringify(cell).replace(/['"]+/g, "")}</small>
                </React.Fragment>
              ) : (
                <small>
                  {cell["overtime"].trim() === ""
                    ? (Object.values(cell) as number[]).reduce(
                        (a, b) => Number(a) + Number(b),
                        0
                      )
                    : cell["overtime"]}
                </small>
              )}
            </td>
          )
        )}
      </tr>
    ))}
  </tbody>
);
