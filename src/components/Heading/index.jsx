function Heading({ classes, children }) {
  return <h3 className={"text-4xl font-heading " + classes}>{children}</h3>;
}

export default Heading;
