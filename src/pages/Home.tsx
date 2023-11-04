import Button from "../stories/Button";

const Home = () => {
  return (
    <div className="w-4/5 p-8 bg-white text-black">
      Games
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
    </div>
  );
};

export default Home;
