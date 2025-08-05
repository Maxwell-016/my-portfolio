import { Tooltip } from "react-tooltip";

// eslint-disable-next-line react/prop-types
const Technologies = ({ icon, name }) => {
  return (
    <div>
      <img
        data-tooltip-id={name}
        data-tooltip-content={name}
        src={icon}
        alt={name}
        width="30px"
        height="30px"
      />
      <Tooltip id={name} place="top" />
    </div>
  );
};

export default Technologies;
