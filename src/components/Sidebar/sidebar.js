import { useState } from "react";
import SubredditCard from "../SubredditCard/subredditCard";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  //Track active card
  const [activeCard, setActiveCard] = useState(null);

  //Function to toggle active class
  const handleCardClick = (id) => {
    setActiveCard(id); //Set clicked card as active card

    // THIS IS WHERE TO PUT CODE FOR API CALLS TO REDDIT
    // You will need the Subreddit card ID to be passed from the API
  };

  return (
    <aside className={styles.sidebar}>
      <h2>Subreddits</h2>
      <SubredditCard
        children="r/All the motherfucking posts you need nigga, literally all of them"
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
      />

      <SubredditCard
        children="r/Dogs"
        image="logo192.png"
        id="card3"
        onClick={() => handleCardClick("card3")}
        active={activeCard === "card3"}
      />
    </aside>
  );
};
export default Sidebar;
