interface CenterProps {
  size?: number | string;
  fill?: string;
}

const Center = ({ size = 24, fill = "black" }: CenterProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.10791 12.9407C8.10791 15.7147 10.3567 17.9634 13.1306 17.9634C15.9046 17.9634 18.1534 15.7147 18.1534 12.9407C18.1501 10.1681 15.9033 7.92122 13.1306 7.91797C10.3567 7.91797 8.10791 10.1667 8.10791 12.9407ZM13.1306 16.1907C11.3357 16.1907 9.88064 14.7356 9.88064 12.9407C9.88064 11.1458 11.3357 9.6907 13.1306 9.6907C14.9256 9.6907 16.3806 11.1458 16.3806 12.9407C16.3806 14.7356 14.9256 16.1907 13.1306 16.1907Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.6536 12.054H22.8336C22.3988 7.37674 18.6945 3.6724 14.0172 3.23761V1.41761C14.0172 0.928089 13.6204 0.53125 13.1309 0.53125C12.6413 0.53125 12.2445 0.928089 12.2445 1.41761V3.23761C7.56726 3.6724 3.86292 7.37674 3.42813 12.054H1.01722C0.527698 12.054 0.130859 12.4508 0.130859 12.9403C0.130859 13.4299 0.527698 13.8267 1.01722 13.8267H3.42813C3.8607 18.5083 7.56885 22.2164 12.2504 22.649C12.2504 22.649 12.2504 22.649 12.2504 22.6963V25.0599C12.2504 25.5494 12.6472 25.9463 13.1368 25.9463C13.6263 25.9463 14.0231 25.5494 14.0231 25.0599V22.6963C14.0231 22.6963 14.0231 22.6963 14.0231 22.649C18.7001 22.2111 22.4019 18.5042 22.8336 13.8267H24.6536C25.1431 13.8267 25.5399 13.4299 25.5399 12.9403C25.5399 12.4508 25.1431 12.054 24.6536 12.054ZM13.1309 20.9176C8.72513 20.9176 5.15359 17.3461 5.15359 12.9403C5.15359 8.53461 8.72513 4.96307 13.1309 4.96307C17.5366 4.96307 21.1081 8.53461 21.1081 12.9403C21.1081 17.3461 17.5366 20.9176 13.1309 20.9176Z"
        fill={fill}
      />
    </svg>
  );
};

export default Center;
