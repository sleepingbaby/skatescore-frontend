import TextInput from "../components/TextInput";

export default {
  component: TextInput,
  title: "TextInput",
  tags: ["autodocs"],
};

export const Medium = {
  args: {},
};

export const Large = {
  args: {
    variant: "lg",
  },
};

export const Custom = {
  args: {
    className:
      "w-[500px] h-14 text-h3 bg-background text-red-500 outline-red-200 focus-visible:outline-red-200 rounded-sm",
    placeholder: "This is a really long placeholder",
  },
};
