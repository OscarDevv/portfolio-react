import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CircleIcon({ to, icon, classes, ...props }) {
  return (
    <a
      {...props}
      href={to}
      className={
        "z-40 flex items-center justify-center w-12.5 h-12.5 border-2 rounded-full transition-colors duration-200 " +
        classes
      }
    >
      <FontAwesomeIcon icon={icon} size="xl" />
    </a>
  );
}

export default CircleIcon;
