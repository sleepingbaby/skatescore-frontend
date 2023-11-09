import { LeaderboardIcon, PlayerIcon, PuckIcon } from "../Icons";
import { SideNavButton, SideNavInput } from "./SideNav.components";
import ROUTES from "../routes";
import { useLocation } from "react-router-dom";

export interface SideNavLink {
  icon: React.ReactNode;
  title: string;
  path: string;
}

const SIDE_NAV_LINKS: SideNavLink[] = [
  { icon: <PuckIcon />, title: "Games", path: ROUTES.HOME },
  { icon: <PlayerIcon />, title: "Players", path: ROUTES.PLAYERS },
  { icon: <LeaderboardIcon />, title: "Leaderboard", path: ROUTES.LEADERBOARD },
];

const SideNav = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col w-[300px] py-6 bg-[#596D78] text-white">
      <h3 className="text-3xl px-4">SkateScore</h3>
      <SideNavInput />
      <ul className="flex flex-col gap-2 text-sm">
        {SIDE_NAV_LINKS.map(({ icon, title, path }) => {
          return (
            <SideNavButton
              icon={icon}
              title={title}
              path={path}
              active={location.pathname === path}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
