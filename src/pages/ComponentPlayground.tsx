// Using this page to test out components, can be deleted when app is ready to deploy
// Make sure to modify router path
import React from "react";
import Button from "../components/Button";
import CustomTable from "../components/CustomTable";
import PlayerChip from "../components/PlayerChip";

const ComponentPlayground = () => {
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
      <CustomTable />
    </div>
  );
};

export default ComponentPlayground;
