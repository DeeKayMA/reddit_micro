import styles from "./content.module.css";
import UserPost from "../UserPost/userPost";


const Content = ({className, posts}) => {

  if(!posts || posts.length === 0){
    return (

      <main className={`${styles.content} ${className ? className : ""}`}>
        <p>Select a subreddit to load posts</p>
      </main>
    
    )
  } else
  return (
    <main className={`${styles.content} ${className ? className : ""}`}>

      {posts.map((post) => {

        const postData = post.data;
        const postTitle = postData.title;
        const postImage = postData.preview?.images[0]?.source?.url || null;
        const postTime = postData.created_utc;
        const userName = `u/${postData.author}`;
        const userImage = post.data.thumbnail
        const voteCount = postData.score;
        const commentCount = postData.num_comments;
        const subreddit = postData.subreddit; // Get subreddit name
        const postId = postData.id; // Get post ID

        console.log(`Post ID: ${postData.id}, Post Image URL: ${postImage}`);


        return(
        <UserPost 
        key={post.data.id} 
        postImage={postImage}
        // postImageAlt={postImageAlt}
        postText={postTitle}
        postTime={postTime}
        userName={userName}
        userImage={userImage}
        // userImageAlt={userName}
        voteCount={voteCount}
        numComments={commentCount}
        subreddit={subreddit}
        postId={postId} 
         
        />)
      })}

    </main>
  );
};



export default Content;
