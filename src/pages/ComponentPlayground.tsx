// Using this page to test out components, can be deleted when app is ready to deploy
// Make sure to modify router path
import { useEffect, useState, useContext } from "react";
import Button from "../components/Button";
import CustomTable from "../components/CustomTable";
import PlayerChip from "../components/PlayerChip";
import { SupabaseContext } from "../providers/SupabaseProvider";

const ComponentPlayground = () => {
  const supabase = useContext(SupabaseContext);
  const [tableData, setTableData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (supabase) {
        try {
          const { data, error } = await supabase
            .from("game")
            .select("*", { count: "exact" });
          if (error) {
            console.error("Error fetching data:", error);
          } else {
            if (data) {
              setCount(data.length);
            }
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
    };
    fetchData();
  }, [supabase]);

  console.log(count);

  useEffect(() => {
    const fetchData = async () => {
      if (supabase) {
        try {
          const { data, error } = await supabase
            .from("game")
            .select("*")
            .order("date", { ascending: false })
            .limit(16);
          if (error) {
            console.error("Error fetching data:", error);
          } else {
            if (data) {
              setTableData(data);
            }
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
    };

    fetchData();
  }, [supabase]);

  return (
    <div className="flex flex-col flex-1 p-8 bg-white text-black space-y-4 ">
      Component Playground
      <br />
      <div>
        <Button variant="contained" size="lg">
          Get Stats
        </Button>
        <Button variant="outlined" size="lg">
          Get Stats
        </Button>
        <br />
        <Button variant="contained" size="sm">
          Get Stats
        </Button>
        <Button variant="outlined" size="sm">
          Get Stats
        </Button>
      </div>
      <div className="flex flex-wrap">
        <PlayerChip first_name="Kelvin" last_name="Lau" number={13} />
        <PlayerChip first_name="Zacharie" last_name="Jones" number={22} />
        <PlayerChip first_name="Garrett" last_name="Weng" number={69} />
      </div>
      <CustomTable tableData={tableData} />
    </div>
  );
};

export default ComponentPlayground;
