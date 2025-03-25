import { useState, useEffect } from "react";
import SubredditCard from "../SubredditCard/subredditCard";
import styles from "./sidebar.module.css";
// import {getSubredditDetails} from '../../utils/redditAPI';

const Sidebar = ({className, onSelect}) => {

  const subreddits = ['all' ,'javascript', 'reactjs', 'webdev', 'programming', 'node', 'css', 'frontend', 'web_design', 'learnprogramming', 'design'];

  //Track active card
  const [activeCard, setActiveCard] = useState(subreddits[0]);

  // The search bar should set the active card to the swarch query, when enter is hit


  //Function to toggle active class
  const handleCardClick = (id) => {
    setActiveCard(id); //Set clicked card as active card
    console.log(`Selected subreddit: ${id}`);
    onSelect(id)
  };

  // //Store subreddit images
  const [subredditImages, setSubredditImages] = useState([]);

  //Fetch Subreddit Images
  // useEffect(()=> {
  //   const fetchSubredditImages = async () => {
  //     const images = {};
  //     for (const subreddit of subreddits){
  //       try {
  //         const image = await getSubredditDetails(subreddit);
  //         images[subreddit] = image

  //       } catch (error) {
  //         console.error(`Failed to fetch image for subreddit ${subreddit}:`, error);
  //         images[subreddit] = "Quan Made Logo.PNG"
  //       }
  //     }
  //     setSubredditImages(images);
  //   };
  //   fetchSubredditImages()
  // }, [subreddits])

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
