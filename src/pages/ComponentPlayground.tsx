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
  const [numResults, setNumResults] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(16);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

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
              setNumResults(data.length);
            }
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (supabase) {
        try {
          const { data, error } = await supabase
            .from("game")
            .select("*")
            .order("date", { ascending: false })
            .range((page - 1) * perPage, page * perPage - 1);
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
  }, [page]);

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
      <div className="flex justify-center w-full gap-8">
        {page > 1 && <button onClick={handlePrevious}>Previous Page</button>}
        {numResults > page * perPage && (
          <button onClick={handleNext}>Next Page</button>
        )}
      </div>
    </div>
  );
};

export default ComponentPlayground;
