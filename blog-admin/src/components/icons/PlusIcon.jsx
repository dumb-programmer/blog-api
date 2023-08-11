import PropType from "prop-types";

const PlusIcon = ({ size, color }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="css-i6dzq1"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};

PlusIcon.propTypes = {
  size: PropType.number.isRequired,
  color: PropType.string.isRequired,
};

export default PlusIcon;
