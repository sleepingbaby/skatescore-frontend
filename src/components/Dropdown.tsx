import { DropdownArrowIcon } from "../Icons";

export interface DropdownItem {
  name: string;
  value: string;
}

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  items: DropdownItem[];
  currentItem: DropdownItem;
  variant?: "md" | "lg";
  onItemSelect: (item: DropdownItem) => void;
}

const DROPDOWN_CLASSES: Record<string, { label: string; text: string }> = {
  md: {
    label: "h-12",
    text: "text-small",
  },
  lg: {
    label: "h-8",
    text: "text-h4",
  },
};

const Dropdown = ({
  items,
  currentItem,
  variant = "md",
  onItemSelect,
  className,
  ...props
}: DropdownProps) => {
  const variantStyles = DROPDOWN_CLASSES[variant];

  const styles = {
    label: `flex justify-between btn no-animation bg-base-100 border-accent text-accent normal-case min-h-fit h-auto ${variantStyles.label} px-3 py-2`,
    ul: "p-2 shadow menu dropdown-content z-[1] w-full bg-base-100 rounded-box",
    div: `dropdown min-w-[200px] w-fit max-w-[300px]${className}`,
  };

  const handleSelect = (item: DropdownItem) => {
    return () => {
      const elem = document.activeElement as HTMLElement;
      if (elem) {
        elem?.blur();
      }

      onItemSelect(item);
    };
  };

  return (
    <div {...props} className={styles.div}>
      <label tabIndex={0} className={styles.label}>
        <p className={`${variantStyles.text}`}>{currentItem.name}</p>
        <DropdownArrowIcon />
      </label>
      <ul tabIndex={0} className={styles.ul}>
        {items.map((item) => {
          return (
            <li key={`dropdown-item-${item.value}`} value={item.value}>
              <a onClick={handleSelect(item)}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
