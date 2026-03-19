import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CircleIcon({ to, icon, classes, ...props }) {
  return (
    <a
      {...props}
      href={to}
      className={
        "flex justify-center items-center border-2 rounded-full w-12.5 h-12.5 transition-colors duration-200 " +
        classes
      }
    >
      <FontAwesomeIcon icon={icon} size="xl" />
    </a>
  );
}

export default CircleIcon;
