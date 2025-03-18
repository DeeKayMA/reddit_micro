import SubredditCard from "../SubredditCard/subredditCard";
import styles from "./sidebar.module.css";


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h1>Sidebar</h1>
      <SubredditCard />
    </div>
  );
};
export default Sidebar;


