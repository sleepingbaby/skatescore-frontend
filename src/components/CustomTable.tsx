import { TableHeader, TableBody } from "./CustomTable.components";

// import { SupabaseContext } from "../providers/SupabaseProvider";
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
  const headerKeys = tableData.length > 0 ? Object.keys(tableData[0]) : [];

  return (
    <div className="flex-1 border border-slate-500 rounded-t-lg">
      <table className="table-fixed border-spacing-0 border-separate rounded-t-lg w-full">
        <TableHeader keys={headerKeys} />
        <TableBody data={tableData} />
      </table>
    </div>
  );
};

export default CustomTable;
