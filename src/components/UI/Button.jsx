export default function Button({ children, className, textOnly, ...props }) {
  let cssClass = textOnly ? "text-button" : "button";
  cssClass += ` ${className}`;
  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
}
