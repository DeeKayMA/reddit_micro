import { useState } from "react";
import SubredditCard from "../SubredditCard/subredditCard";
import styles from "./sidebar.module.css";

const Sidebar = ({className, onSelect}) => {

  const subreddits = ['all' ,'javascript', 'reactjs', 'webdev', 'programming', 'node', 'css', 'frontend', 'web_design', 'learnprogramming', 'design'];

  //Track active card
  const [activeCard, setActiveCard] = useState(subreddits[0]);


  //Function to toggle active class
  const handleCardClick = (id) => {
    setActiveCard(id); //Set clicked card as active card
    console.log(`Selected subreddit: ${id}`);
    onSelect(id)

    // THIS IS WHERE TO PUT CODE FOR API CALLS TO REDDIT
    // You will need the Subreddit card ID to be passed from the API
  };

  return (
    <aside className={`${styles.sidebar} ${className ? className : ""}`}>
      <h2>Subreddits</h2>

      {subreddits.map((subreddit)=> (
        <SubredditCard
        children={`r/${subreddit}`}
        image="logo192.png"
        id={subreddit}
        key={subreddit}
        onClick={() => handleCardClick(subreddit)}
        active={activeCard === subreddit}
      />

      ))}

      {/* <SubredditCard
        children="r/All"
        image="logo192.png"
        id="card1"
        onClick={() => handleCardClick("card1")}
        active={activeCard === "card1"}
      />
      <SubredditCard
        children="r/News"
        image="logo192.png"
        id="card2"
        onClick={() => handleCardClick("card2")}
        active={activeCard === "card2"}
      /> */}
    </aside>
  );
};
export default Sidebar;
