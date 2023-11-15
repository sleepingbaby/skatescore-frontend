import React, { useEffect, useContext, useState } from "react";
import { SupabaseContext } from "../providers/SupabaseProvider";

/*
<CustomTable tableData={tableData}>
  <CustomTableHead headCells={headCells} />
  <CustomTableBody>
    {TABLE_DATA.map((row) => <CustomTableRow>
        <CustomTableCell>{row.date}</CustomTableRow>
        <CustomTableCell>{row.homeTeam}</CustomTableRow>
        <CustomTableCell>{row.awayTeam}</CustomTableRow>
        {...rest of table cell data}
      </CustomTableRow>}
  </CustomTableBody>
</CustomTable>
*/

const CustomTable = () => {
  const supabase = useContext(SupabaseContext);
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (supabase) {
        try {
          const { data, error } = await supabase
            .from("game")
            .select("*")
            .limit(16);
          if (error) {
            console.error("Error fetching data:", error);
          } else {
            setTableData(data);
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
    };

    fetchData();
  }, [supabase]);
  return (
    <div className="flex-1 border border-slate-500 rounded-t-lg">
      <table className="table-fixed border-spacing-0 border-separate rounded-t-lg w-full">
        <thead className="text-xs text-white uppercase dark:bg-accent">
          <tr className="h-10">
            <th className="rounded-tl-md">Date</th>
            <th>Team(H)</th>
            <th>Team(A)</th>
            <th>Score(H)</th>
            <th>Score(A)</th>
            <th>Season</th>
            <th>Division</th>
            <th className="rounded-tr-md">Rink</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-200 h-[48px]">
            <td className="min-w-[120px] text-center py-2">
              <small>9/5/22</small>
            </td>
            <td className="min-w-[120px] text-center py-2 ">
              <small>Rogue Squadron</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>Chupacabra</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>4</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>2</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>Fall 2022</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>7A</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>San Jose East</small>
            </td>
          </tr>
          <tr className="hover:bg-gray-200 h-[48px]">
            <td className="min-w-[120px] text-center py-2">
              <small>9/5/22</small>
            </td>
            <td className="min-w-[120px] text-center py-2 ">
              <small>Rogue Squadron</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>Chupacabra</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>4</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>2</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>Fall 2022</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>7A</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>San Jose East</small>
            </td>
          </tr>
          <tr className="hover:bg-gray-200 h-[48px]">
            <td className="min-w-[120px] text-center py-2">
              <small>9/5/22</small>
            </td>
            <td className="min-w-[120px] text-center py-2 ">
              <small>Rogue Squadron</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>Chupacabra</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>4</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>2</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>Fall 2022</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>7A</small>
            </td>
            <td className="min-w-[120px] text-center py-2">
              <small>San Jose East</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
