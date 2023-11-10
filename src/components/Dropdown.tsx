interface DropdownItem {
  name: string;
  value: string;
}

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  items: DropdownItem[];
}

const Dropdown = ({ items, onChange, ...props }: DropdownProps) => {
  return (
    <select onChange={(e) => onChange && onChange(e)} {...props}>
      {items.map((item) => {
        return (
          <option key={`dropdown-item-${item.value}`} value={item.value}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
