import { Link, useNavigate } from "react-router-dom";
import { SideNavLink } from "./SideNav";
import TextInput from "./TextInput";
import ROUTES from "../routes";

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
  const navigate = useNavigate();

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = (event.target.children[0] as HTMLInputElement).value;

    if (searchValue) {
      navigate(`${ROUTES.PLAYERS}?search=${searchValue}`);
    }

    (event.target.children[0] as HTMLInputElement).value = "";
  };

  return (
    <form onSubmit={handleSearch}>
      <TextInput
        className="my-6 mx-4 px-4 py-1 h-[40px] bg-white rounded-3xl text-text focus:outline-primary transition-all"
        placeholder="Search players..."
      />
    </form>
  );
};
