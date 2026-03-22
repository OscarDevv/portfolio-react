function Heading({ classes, children }) {
  return <h3 className={"font-heading text-4xl " + classes}>{children}</h3>;
}

export default Heading;
