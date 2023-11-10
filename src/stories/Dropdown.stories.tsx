import { useState } from "react";
import Dropdown from "../components/Dropdown";

export default {
  component: Dropdown,
  title: "Dropdown",
  tags: ["autodocs"],
};

const FRUITS = [
  {
    name: "Apples",
    value: "apples",
  },
  {
    name: "Orange",
    value: "oranges",
  },
  {
    name: "Bananas",
    value: "bananas",
  },
  {
    name: "Dragonfruit",
    value: "dragonfruit",
  },
];

export const Default = {
  args: {
    items: FRUITS,
  },
};

export const WithState = () => {
  const [fruit, setFruit] = useState(FRUITS[0]);

  const handleFruitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setFruit(
      FRUITS[FRUITS.findIndex((fruit) => fruit.value === event.target.value)]
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <h4>{fruit.name}</h4>
      <Dropdown items={FRUITS} onChange={handleFruitChange} />
    </div>
  );
};
