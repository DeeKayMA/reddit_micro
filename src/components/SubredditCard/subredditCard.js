import styles from "./subredditCard.module.css";

const SubredditCard = ({ children, image, onClick, className, active }) => {

    const handleClick = () => {
        onClick()
    };

    // if(children.length > 20){
    //     children = children.substring(0, 20) + '...';
    // }
        

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
