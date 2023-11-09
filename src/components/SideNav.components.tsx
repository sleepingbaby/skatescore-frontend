import { Link } from "react-router-dom";
import { SideNavLink } from "./SideNav";

interface SideNavButtonProps extends SideNavLink {
  active?: boolean;
}

export const SideNavButton = ({
  icon,
  title,
  path,
  active = false,
}: SideNavButtonProps) => {
  return (
    <li className="flex h-[48px]">
      <Link
        className={`flex flex-1 items-center gap-2 px-4 hover:bg-primary transition ease-in-out ${
          active && "bg-primary"
        }`}
        to={path}
      >
        {icon}
        {title}
      </Link>
    </li>
  );
};

export const SideNavInput = () => {
  return (
    <input
      className="my-6 mx-4 px-4 py-1 h-[40px] bg-white rounded-3xl text-text focus:outline-primary transition-all"
      placeholder="Search players..."
    />
  );
};
