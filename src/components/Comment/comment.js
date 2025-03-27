import styles from "./comment.module.css";

const Comment = ({userName, commentText}) => {
  return (
    <div className={styles.comment}>
      {/* Comment details */}
      <div className={styles.commentInfo}>
        {/* <img src="./Quan Made Logo.png" alt="Anything" className={styles.userImage}/> */}
        <p className={styles.userName}>{userName}</p>
        {/* <p className={styles.interpunct}>·</p> */}
        {/* <p className={styles.postHours}>2 hours ago</p> */}
      </div>
      {/* Comment */}
      <p className={styles.commentContent}>
          {commentText}
      </p>
    </div>
  );
};

export default Comment;
