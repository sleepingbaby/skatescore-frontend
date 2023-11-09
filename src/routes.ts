const ROUTES: Record<string, string> = {
  HOME: "/",
  PLAYERS: "/p",
  LEADERBOARD: "/l",
};

export const DYNAMIC_ROUTES: Record<
  string,
  (param: string | number) => string
> = {
  gameById: (param: string | number) => `/g/${param}`,
  playerById: (param: string | number) => `/p/${param}`,
};

export default ROUTES;
