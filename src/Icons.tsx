export type IconProps = React.SVGProps<SVGSVGElement>;

export const PuckIcon = ({
  width = 24,
  height = 19,
  fill = "none",
  viewBox = "0 0 24 19",
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 0.5C5.4 0.5 0 2.384 0 4.7C0 7.016 5.4 8.9 12 8.9C18.6 8.9 24 7.016 24 4.7C24 2.384 18.6 0.5 12 0.5ZM0 8.612V14.3C0 16.616 5.4 18.5 12 18.5C18.6 18.5 24 16.616 24 14.3V8.612C23.196 9.164 22.296 9.584 21.276 9.932C18.744 10.82 15.54 11.3 12 11.3C8.46 11.3 5.256 10.82 2.724 9.932C1.704 9.584 0.804 9.164 0 8.612Z"
        fill="#F9FAFB"
      />
    </svg>
  );
};

export const PlayerIcon = ({
  width = 24,
  height = 24,
  fill = "none",
  viewBox = "0 0 24 24",
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 0C13.5913 0 15.1174 0.632141 16.2426 1.75736C17.3679 2.88258 18 4.4087 18 6C18 7.5913 17.3679 9.11742 16.2426 10.2426C15.1174 11.3679 13.5913 12 12 12C10.4087 12 8.88258 11.3679 7.75736 10.2426C6.63214 9.11742 6 7.5913 6 6C6 4.4087 6.63214 2.88258 7.75736 1.75736C8.88258 0.632141 10.4087 0 12 0ZM12 15C18.63 15 24 17.685 24 21V24H0V21C0 17.685 5.37 15 12 15Z"
        fill="#F9FAFB"
      />
    </svg>
  );
};

export const LeaderboardIcon = ({
  width = 22,
  height = 24,
  fill = "none",
  viewBox = "0 0 22 24",
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.2 2.4H14.184C13.68 1.008 12.36 0 10.8 0C9.24 0 7.92 1.008 7.416 2.4H2.4C1.08 2.4 0 3.48 0 4.8V21.6C0 22.92 1.08 24 2.4 24H19.2C20.52 24 21.6 22.92 21.6 21.6V4.8C21.6 3.48 20.52 2.4 19.2 2.4ZM10.8 2.4C11.46 2.4 12 2.94 12 3.6C12 4.26 11.46 4.8 10.8 4.8C10.14 4.8 9.6 4.26 9.6 3.6C9.6 2.94 10.14 2.4 10.8 2.4ZM4.8 7.2H16.8V4.8H19.2V21.6H2.4V4.8H4.8V7.2ZM10.8 19.2V16.8H16.8V19.2H10.8ZM10.8 12V9.6H16.8V12H10.8ZM6 13.2V9.6H4.8V8.4H7.2V13.2H6ZM7.5 15.6C7.992 15.6 8.4 16.008 8.4 16.5C8.4 16.74 8.304 16.968 8.148 17.124L6.144 19.2H8.4V20.4H4.8V19.296L7.2 16.8H4.8V15.6H7.5Z"
        fill="#F9FAFB"
      />
    </svg>
  );
};

export const DropdownArrowIcon = ({
  width = 20,
  height = 20,
  fill = "none",
  viewBox = "0 0 20 20",
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.29289 14.2071C9.68342 14.5976 10.3166 14.5976 10.7071 14.2071L17.0711 7.84315C17.4616 7.45262 17.4616 6.81946 17.0711 6.42893C16.6805 6.03841 16.0474 6.03841 15.6569 6.42893L10 12.0858L4.34315 6.42893C3.95262 6.03841 3.31946 6.03841 2.92893 6.42893C2.53841 6.81946 2.53841 7.45262 2.92893 7.84315L9.29289 14.2071ZM9 12.5L9 13.5L11 13.5L11 12.5L9 12.5Z"
        fill="#596D78"
      />
    </svg>
  );
};
