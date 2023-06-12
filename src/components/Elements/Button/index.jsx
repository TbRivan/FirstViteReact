import PropTypes from "prop-types";

export default function Button(props) {
  const {
    children = "default",
    classname,
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`rounded ${classname} h-10 px-6`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  classname: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
