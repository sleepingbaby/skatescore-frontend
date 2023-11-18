import { TableHeader, TableBody } from "./CustomTable.components";

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

interface CustomTableProps {
  tableData: RowData[];
}

const CustomTable = ({ tableData }: CustomTableProps) => {
  const headerKeys = tableData.length > 0 ? Object.keys(tableData[0]) : [];

  return (
    <div className="flex-1 border border-slate-500 rounded-t-lg">
      <table className="table-auto border-spacing-0 border-separate rounded-t-lg w-full">
        <TableHeader keys={headerKeys} />
        <TableBody data={tableData} />
      </table>
    </div>
  );
};

export default CustomTable;
