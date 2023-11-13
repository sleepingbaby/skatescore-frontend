import { useState } from "react";
import Dropdown, { DropdownItem } from "../components/Dropdown";

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

export const Default = () => {
  const [fruit, setFruit] = useState(FRUITS[0]);

  const handleFruitChange = (item: DropdownItem) => {
    setFruit(FRUITS[FRUITS.findIndex((fruit) => fruit.value === item.value)]);
  };

  return (
    <div className="flex flex-col gap-4">
      <h4>{fruit.name}</h4>
      <Dropdown
        items={FRUITS}
        currentItem={fruit}
        onItemSelect={handleFruitChange}
      />
    </div>
  );
};

export const Large = () => {
  const [fruit, setFruit] = useState(FRUITS[0]);

  const handleFruitChange = (item: DropdownItem) => {
    setFruit(FRUITS[FRUITS.findIndex((fruit) => fruit.value === item.value)]);
  };

  return (
    <div className="flex flex-col gap-4">
      <h4>{fruit.name}</h4>
      <Dropdown
        variant="lg"
        items={FRUITS}
        currentItem={fruit}
        onItemSelect={handleFruitChange}
      />
    </div>
  );
};
