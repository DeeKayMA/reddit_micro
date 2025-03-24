import './App.css';
import {useState, useEffect} from "react";
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import Content from '../content/content';
import {getBestPosts} from '../../utils/redditAPI';


function App() {

  // Fetch posts whenever the selected subreddit changes
  // pass the posts to the Content component
  // pass the subreddit to the Sidebar component

  const defaultSubreddit = 'all'
  const [selectedSubreddit, setSelectedSubreddit] = useState(null);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (subreddit) => {
    setSelectedSubreddit(subreddit);
    const fetchedPosts = await getBestPosts(subreddit);
    setPosts(fetchedPosts)
  };

  useEffect(()=> {
    fetchPosts(defaultSubreddit);
  }, []);


  
  return (
    <div className="App">
      <Navbar className="navbar"/>
      <Content className="content" posts={posts} />
      <Sidebar className="sidebar" onSelect={fetchPosts} />
    </div>
  );
}

export default App;
