import "../styles/components.css";

const Button = ({
  text,
  backgroundColor,
  textColor,
  onClick,
  type = "button",
  className = "",
  style = {},
}) => {
  return (
    <button
      className="custom-button"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        ...style,
      }}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;