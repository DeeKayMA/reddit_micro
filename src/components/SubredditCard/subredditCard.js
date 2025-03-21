import styles from "./subredditCard.module.css";

const SubredditCard = ({ children, image, onClick, className, active }) => {

    const handleClick = () => {
        onClick()
    };
        

  return (
    <button
      className={`${styles.subredditCard} ${className ? className : ""} ${active ? styles.active : ""}`}
      onClick={handleClick}
    >
      {image && <span className={styles.image}><img src={image} alt={children}/> </span>}

      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
export default SubredditCard;
