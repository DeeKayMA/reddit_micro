import styles from "./button.module.css";

const Button = ({ children, icon, onclick, className, isActive }) => {
  return (
    <button
      className={`${styles.button} ${className ? className : ""} ${isActive ? styles.active : ""}`}
      onClick={onclick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};

export default Button;