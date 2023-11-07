import Button from "../components/Button";
import { SupabaseContext } from "../providers/SupabaseProvider";
import { useContext, useEffect, useState } from "react";

interface Player {
  first_name: string;
  last_name: string;
  number: number;
}

const Home = () => {
  const supabase = useContext(SupabaseContext);
  const [playerData, setPlayerData] = useState<Player[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (supabase) {
        try {
          const { data, error } = await supabase
            .from("player")
            .select("first_name, last_name, number")
            .limit(3);
          if (error) {
            console.error("Error fetching data:", error);
          } else {
            setPlayerData(data || []);
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
    };

    fetchData();
  }, [supabase]);

  return (
    <div className="w-4/5 p-8 bg-white text-black">
      Games
      {playerData && (
        <div>
          {playerData.map((player, index) => (
            <div key={index} className="text-black">
              {player.first_name}
              {player.last_name}
              {player.number}
            </div>
          ))}
        </div>
      )}
      <br />
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
      <br />
    </div>
  );
};

export default Home;
