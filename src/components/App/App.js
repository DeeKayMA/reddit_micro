import logo from '../../logo.svg';
import './App.css';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import Content from '../content/content';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"/>
      <Sidebar className="sidebar"/>
      <Content className="content" />
    </div>
  );
}

export default App;
