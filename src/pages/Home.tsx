import Button from "../stories/Button";

const Home = () => {
  return (
    <div className="w-4/5 p-8 bg-white text-black">
      Games
      <Button variant="contained" size="lg">
        Click Me
      </Button>
    </div>
  );
};

export default Home;
