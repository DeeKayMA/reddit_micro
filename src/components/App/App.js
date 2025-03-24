import './App.css';
import {useState, useEffect} from "react";
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import Content from '../content/content';


function App() {
  const [selectedSubreddit, setSelectedSubreddit] = useState(null);
  const [posts, setPosts] = useState([]);

  // Fetch posts whenever the selected subreddit changes
  // pass the posts to the Content component
  // pass the subreddit to the Sidebar component

  //The list of Subreddits I want to show in the sidebar
  const getSubreddits = () => {
    return ['javascript', 'reactjs', 'webdev', 'programming', 'node', 'css', 'frontend', 'web_design', 'learnprogramming', 'design'];
  };

  
  return (
    <div className="App">
      <Navbar className="navbar"/>
      <Content className="content" />
      <Sidebar className="sidebar"/>
    </div>
  );
}

export default App;
