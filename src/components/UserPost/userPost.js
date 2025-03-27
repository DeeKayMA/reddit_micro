import styles from "./userPost.module.css";
import Button from "../Button/button";
import { useState } from "react";
import Comment from "../Comment/comment";
import { getPostComments } from "../../utils/redditAPI";

const arrowUpSvg = (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289L18.7071 10.2929C19.0976 10.6834 19.0976 11.3166 18.7071 11.7071C18.3166 12.0976 17.6834 12.0976 17.2929 11.7071L13 7.41421L13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11 7.41421L6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071C4.90237 11.3166 4.90237 10.6834 5.29289 10.2929L11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4Z"
      fill="currentColor"
    ></path>
  </svg>
);
const arrowDownSvg = (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M12 4C12.5523 4 13 4.44772 13 5V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z"
      fill="currentColor"
    ></path>
  </svg>
);
const commentSvg = (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V17C22 18.1046 21.1046 19 20 19H15.4142L12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071L8.58579 19H4C2.89543 19 2 18.1046 2 17V6ZM20 6H4V17H9C9.26522 17 9.51957 17.1054 9.70711 17.2929L12 19.5858L14.2929 17.2929C14.4804 17.1054 14.7348 17 15 17H20V6ZM6 9.5C6 8.94772 6.44772 8.5 7 8.5H17C17.5523 8.5 18 8.94772 18 9.5C18 10.0523 17.5523 10.5 17 10.5H7C6.44772 10.5 6 10.0523 6 9.5ZM6 13.5C6 12.9477 6.44772 12.5 7 12.5H13C13.5523 12.5 14 12.9477 14 13.5C14 14.0523 13.5523 14.5 13 14.5H7C6.44772 14.5 6 14.0523 6 13.5Z"
      fill="currentColor"
    ></path>
  </svg>
);
// const shareSvg = (
//   <svg
//     fill="none"
//     viewBox="0 0 24 24"
//     height="24"
//     width="24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       xmlns="http://www.w3.org/2000/svg"
//       d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711C15.3166 7.09763 14.6834 7.09763 14.2929 6.70711L13 5.41421V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V5.41421L9.70711 6.70711C9.31658 7.09763 8.68342 7.09763 8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289L11.2929 2.29289ZM4 11C4 9.89543 4.89543 9 6 9H8C8.55228 9 9 9.44772 9 10C9 10.5523 8.55228 11 8 11H6V20H18V11H16C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9H18C19.1046 9 20 9.89543 20 11V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V11Z"
//       fill="currentColor"
//     ></path>
//   </svg>
// );

// Share on click function
// const shareClick = () => {}

//COMPOENTNT STARTS HERE

const UserPost = ({
  postImage,
  postImageAlt,
  postText,
  userName,
  userImage,
  userImageAlt,
  postTime,
  voteCount,
  numComments,
  subreddit,
  postId,
}) => {
  //UPVOTE & DOWNVOTE
  // Set states of upvote and downvote buttons
  const [upvoteActive, setUpvoteActive] = useState(false);
  const [downvoteActive, setDownvoteActive] = useState(false);

  // Vote count
  const votes = voteCount;
  const [liveVoteCount, setLiveVoteCount] = useState(votes);

  // Handle click for upvote
  const handleUpvoteClick = () => {
    if (upvoteActive) {
      setUpvoteActive(false); //Set upvote to false
      setLiveVoteCount(votes); //Set comment count back to original
    } else {
      setUpvoteActive(true); //Set upvote to true
      setDownvoteActive(false); //Set downvote to false
      setLiveVoteCount(votes + 1); //Set comment count up by 1
    }
  };

  // Handle click for downvote
  const handleDownvoteClick = () => {
    if (downvoteActive) {
      setDownvoteActive(false); //Set downvote to false
      setLiveVoteCount(votes); //Set comment count back to original
    } else {
      setDownvoteActive(true); //Set downvote to true
      setUpvoteActive(false); //Set upvote to false
      setLiveVoteCount(votes - 1); //Set comment count up by 1
    }
  };

  //Comments
  const commentCount = numComments;
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);

  //Show / Hide comments
  const [commentsVisible, setCommentsVisible] = useState(styles.hidden);

  const commentClick = async () => {
    if (commentsVisible === styles.hidden) {
      // Show comments
      setCommentsVisible(styles.notHidden);

      // Fetch comments if not already loaded
      if (comments.length === 0) {
        setLoadingComments(true);
        try {
          const fetchedComments = await getPostComments(subreddit, postId); // Call API with subreddit and post ID
          setComments(fetchedComments || []); // Ensure comments is always an array
        } catch (error) {
          console.error("Error fetching comments:", error);
          setComments([]); // Set to an empty array on error
        } finally {
          setLoadingComments(false);
        }
      }
    } else {
      setCommentsVisible(styles.hidden);
    }
  };

  //format numbers to say K for thousands and M for millions

  const formatNumber = (num) => {
    if (num >= 1_000_000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1_000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num;
  };

  //format timestamp
  const timeAgoFormula = (utcSeconds, locale = "en") => {
    const now = Date.now(); // Current time in milliseconds
    const postTime = utcSeconds * 1000; // Convert UTC seconds to milliseconds
    const diffInSeconds = Math.floor((now - postTime) / 1000); // Difference in seconds

    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

    if (diffInSeconds < 60) {
      return rtf.format(-diffInSeconds, "second");
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return rtf.format(-minutes, "minute");
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return rtf.format(-hours, "hour");
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return rtf.format(-days, "day");
    } else if (diffInSeconds < 31536000) {
      const months = Math.floor(diffInSeconds / 2592000);
      return rtf.format(-months, "month");
    } else {
      const years = Math.floor(diffInSeconds / 31536000);
      return rtf.format(-years, "year");
    }
  };

  const timeAgo = timeAgoFormula(postTime);

  return (
    <div className={styles.userPost}>
      {/* Subreddit image, name and post hours go here */}
      <div className={styles.postInfo}>
        <img src={userImage} alt={userImageAlt} className={styles.userImage} />
        <p className={styles.userName}>{userName}</p>
        <p className={styles.interpunct}>·</p>
        <p className={styles.postHours}>{timeAgo}</p>
      </div>
      {/* Post content goes here */}
      <p className={styles.postContent}>{postText}</p>
      {/* Post image goes here */}
      {/* {postImage && (
        <img src={postImage} alt={postImageAlt} className={styles.postImage} />
      )} */}

      {/* POST ACTIONS */}
      <div className={styles.postActions}>
        {/* Left side of the post actions */}
        <div className={styles.leftActions}>
          {/* Upvote */}
          <Button
            icon={arrowUpSvg}
            onclick={handleUpvoteClick}
            className=""
            isActive={upvoteActive}
          />
          <p className={styles.likeCount}>{formatNumber(liveVoteCount)}</p>
          {/* Downvote */}
          <Button
            icon={arrowDownSvg}
            onclick={handleDownvoteClick}
            className=""
            isActive={downvoteActive}
          />
        </div>
        {/* Right side of the post actions */}
        <div className={styles.rightActions}>
          <Button
            children={formatNumber(commentCount)}
            icon={commentSvg}
            onclick={commentClick}
            className=""
            isActive={false}
          ></Button>
          {/* <Button icon={shareSvg} onclick={shareClick} className="" isActive={false}/> */}
        </div>
      </div>
      {/* COMMENTS */}
      <div className={`${styles.comments} ${commentsVisible}`}>
        {loadingComments ? (
          <p>Loading comments...</p>
        ) : (
          comments.map((comment) => (

            <Comment
              key={comment.data.id}
              userName={`u/${comment.data.author}`}
              commentText={comment.data.body}
              voteCount={comment.data.score}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default UserPost;
