function ButtonGroup({ children, ...props }) {
  return (
    <div className="flex justify-center gap-3" {...props}>
      {children}
    </div>
  );
}

export { ButtonGroup };

function Button({ type, variant, children, ...props }) {
  const variants = {
    light: "bg-white text-black hover:bg-neutral-200",
    dark: "bg-black text-white hover:bg-neutral-900",
  };

  const addClasses = variants[variant] || "";

  if (type === "link") {
    return (
      <a
        {...props}
        className={
          "px-5 py-3 font-semibold text-xl rounded-full cursor-pointer z-40 transition-colors duration-200 " +
          addClasses
        }
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...props}
      className={
        "px-5 py-3 font-semibold text-xl rounded-full cursor-pointer z-40 transition-colors duration-200 " +
        addClasses
      }
    >
      {children}
    </button>
  );
}

export default Button;
