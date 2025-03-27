import { useState, useEffect, useRef } from "react";
import SubredditCard from "../SubredditCard/subredditCard";
import styles from "./sidebar.module.css";
// import {getSubredditDetails} from '../../utils/redditAPI';

const Sidebar = ({className, onSelect, onResetActiveCard}) => {

  const subreddits = ['all' ,'javascript', 'reactjs', 'webdev', 'programming', 'node', 'css', 'frontend', 'web_design', 'learnprogramming', 'design'];

  //Track active card
  const [activeCard, setActiveCard] = useState(subreddits[0]);

  //Function to toggle active class
  const handleCardClick = (id) => {
    setActiveCard(id); //Set clicked card as active card
    console.log(`Selected subreddit: ${id}`);
    onSelect(id)
  };

   // Function to handle keydown event
   const handleKeyDown = (event) => {
    if (event.target.tagName === "INPUT" && event.key === "Enter") {
      setActiveCard(null); // Reset active card
      if (onResetActiveCard) onResetActiveCard(); // Optional callback
    }
  };

  // Add keydown event listener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);



  return (
    <aside className={`${styles.sidebar} ${className ? className : ""}`}>
      <h2>Subreddits</h2>

      {subreddits.map((subreddit)=> (
        <SubredditCard
        children={`r/${subreddit}`}
        // image={subredditImages[subreddit]}
        id={subreddit}
        key={subreddit}
        onClick={() => handleCardClick(subreddit)}
        active={activeCard === subreddit}
      />

      ))}

    </aside>
  );
};
export default Sidebar;
