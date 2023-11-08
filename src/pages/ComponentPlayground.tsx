// Using this page to test out components, can be deleted when app is ready to deploy
// Make sure to modify router path
import React from "react";
import Button from "../components/Button";
import PlayerChip from "../components/PlayerChip";

const ComponentPlayground = () => {
  return (
    <div className="w-4/5 p-8 bg-white text-black space-y-4">
      Component Playground
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
      <div className="flex flex-wrap">
        <PlayerChip first_name="Kelvin" last_name="Lau" number={13} />
        <PlayerChip first_name="Zacharie" last_name="Jones" number={22} />
        <PlayerChip first_name="Garrett" last_name="Weng" number={69} />
      </div>
    </div>
  );
};

export default ComponentPlayground;
