import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import Sidebar from "../Sidebar/sidebar";
import Content from "../content/content";
import { getBestPosts } from "../../utils/redditAPI";

function App() {
  // pass the search criteria from Navbar to the sidebar
  // pass the posts to the Content component
  // pass the subreddit to the Sidebar component

  const [selectedSubreddit, setSelectedSubreddit] = useState('all');
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (subreddit) => {
    setSelectedSubreddit(subreddit);

    try {
      const fetchedPosts = await getBestPosts(subreddit);
      console.log("Fetched Posts JSON:", fetchedPosts); // Log the JSON response
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };


  useEffect(() => {
    fetchPosts(selectedSubreddit);
  }, [selectedSubreddit]);

  const handleSearch = (searchQuery) => {
    fetchPosts(searchQuery);
  };

  return (
    <div className="App">
      <Navbar className="navbar" onSearch={handleSearch} />
      <Content className="content" posts={posts} />
      <Sidebar
        className="sidebar"
        onSelect={fetchPosts}
      />
    </div>
  );
}

export default App;
