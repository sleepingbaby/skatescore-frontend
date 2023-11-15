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

// const supabase = useContext(SupabaseContext);
//   const [tableData, setTableData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       if (supabase) {
//         try {
//           const { data, error } = await supabase
//             .from("game")
//             .select("*")
//             .limit(16);
//           if (error) {
//             console.error("Error fetching data:", error);
//           } else {
//             setTableData(data);
//           }
//         } catch (error) {
//           console.error("An error occurred:", error);
//         }
//       }
//     };

//     fetchData();
//   }, [supabase]);

//   console.log(tableData);
const CustomTable = ({ tableData }) => {
  return (
    <div className="flex-1 border border-slate-500 rounded-t-lg">
      <table className="table-fixed border-spacing-0 border-separate rounded-t-lg w-full">
        <thead className="text-xs text-white uppercase dark:bg-accent">
          {tableData.length > 0 && (
            <tr className="h-10">
              {Object.keys(tableData[0]).map((key: string, index: number) => (
                <th
                  key={index}
                  className={`${
                    index === 0
                      ? "rounded-tl-md"
                      : index === Object.keys(tableData[0]).length - 1
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
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-200 h-[48px]">
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="min-w-[120px] text-center py-2">
                  <small>{cell}</small>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
