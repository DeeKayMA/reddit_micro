import styles from "./content.module.css";
import UserPost from "../UserPost/userPost";

const Content = (className) => {
  return (
    <main className={`${styles.content} ${className ? className : ""}`}>
      <UserPost
        postImage="https://images.unsplash.com/photo-1616509091215-57bbece93654?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        postImageAlt="Blue Car"
        postText="Today I designed a reddit client!"
        postTime="2 hours ago"
        userName="u/QuanMade"
        userImage="/Quan Made Logo.png"
        userImageAlt="Subreddit Logo"
        voteCount={22}
      />

      <UserPost
        postImage="https://images.unsplash.com/photo-1742226111386-b6a84ef8e660?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        postImageAlt="Blue Car"
        postText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor interdum congue. Fusce porta diam et nibh vestibulum gravida. Phasellus."
        postTime="2 hours ago"
        userName="u/QuanMade"
        userImage="/Quan Made Logo.png"
        userImageAlt="Subreddit Logo"
        voteCount={15}
      />
    </main>
  );
};
export default Content;
