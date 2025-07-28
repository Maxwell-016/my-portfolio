/* eslint-disable react/prop-types */
import styles from "./module.styles/experience.module.css";

const Experience = ({ img, title, place, roles }) => {
  const rolesList = Array.isArray(roles)
    ? roles
    : roles
    ? Object.values(roles)
    : [];

  return (
    <div className={styles.experience_card}>
      <div className={styles.center}>
        <img src={img} alt={place} />
        <h2>{title}</h2>
        <h3>{place}</h3>
        <h4>Roles & Responsibilities</h4>
      </div>
        <ul>
          {rolesList.map((role, index) => {
            return <li key={index}>{role}</li>;
          })}
        </ul>
      </div>
  );
};

export default Experience;
