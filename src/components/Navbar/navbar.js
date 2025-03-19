import {useState, useEffect} from "react";
import styles from "./navbar.module.css";
import Button from "../Button/button";

const sunSvg = <svg fill="currentColor" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M12 2C12.5523 2 13 2.44772 13 3V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V3C11 2.44772 11.4477 2 12 2ZM19.0711 4.92893C19.4616 5.31945 19.4616 5.95261 19.0711 6.34314L18.364 7.05025C17.9735 7.44077 17.3403 7.44077 16.9498 7.05025C16.5593 6.65972 16.5593 6.02656 16.9498 5.63603L17.6569 4.92893C18.0474 4.5384 18.6806 4.5384 19.0711 4.92893ZM4.92893 4.92893C5.31945 4.5384 5.95262 4.5384 6.34314 4.92893L7.05025 5.63603C7.44077 6.02656 7.44077 6.65972 7.05025 7.05025C6.65972 7.44077 6.02656 7.44077 5.63603 7.05025L4.92893 6.34314C4.5384 5.95262 4.5384 5.31945 4.92893 4.92893ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM2 12C2 11.4477 2.44772 11 3 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H3C2.44772 13 2 12.5523 2 12ZM19 12C19 11.4477 19.4477 11 20 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20C19.4477 13 19 12.5523 19 12ZM5.63603 16.9497C6.02656 16.5592 6.65972 16.5592 7.05025 16.9497C7.44077 17.3403 7.44077 17.9734 7.05025 18.364L6.34314 19.0711C5.95262 19.4616 5.31945 19.4616 4.92893 19.0711C4.5384 18.6805 4.5384 18.0474 4.92893 17.6568L5.63603 16.9497ZM16.9498 18.364C16.5593 17.9734 16.5593 17.3403 16.9498 16.9497C17.3403 16.5592 17.9735 16.5592 18.364 16.9497L19.0711 17.6568C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711C18.6806 19.4616 18.0474 19.4616 17.6569 19.0711L16.9498 18.364ZM12 19C12.5523 19 13 19.4477 13 20V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V20C11 19.4477 11.4477 19 12 19Z" fill="currentColor"></path>
</svg>

const moonSvg = <svg fill="currentColor" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M9.36077 3.29289C9.6659 3.59801 9.74089 4.06444 9.54678 4.44982C9.04068 5.45468 8.75521 6.59034 8.75521 7.79556C8.75521 11.9097 12.0903 15.2448 16.2044 15.2448C17.4097 15.2448 18.5453 14.9593 19.5502 14.4532C19.9356 14.2591 20.402 14.3341 20.7071 14.6392C21.0122 14.9443 21.0872 15.4108 20.8931 15.7962C19.3396 18.8806 16.1428 21 12.4492 21C7.23056 21 3 16.7694 3 11.5508C3 7.85718 5.11941 4.66038 8.20384 3.10688C8.58923 2.91278 9.05565 2.98777 9.36077 3.29289ZM6.8217 6.66959C5.68637 7.9774 5 9.6843 5 11.5508C5 15.6649 8.33513 19 12.4492 19C14.3157 19 16.0226 18.3136 17.3304 17.1783C16.9611 17.2222 16.5853 17.2448 16.2044 17.2448C10.9858 17.2448 6.75521 13.0142 6.75521 7.79556C6.75521 7.41471 6.77779 7.03895 6.8217 6.66959Z" fill="currentColor"></path>
</svg>


// Functions to toggle between light and dark mode

const root = document.documentElement;

const lightMode = () => {
    root.style.setProperty('color-scheme', 'light');
    localStorage.setItem('theme', 'light'); // Save preference
};

const darkMode = () => {
    root.style.setProperty('color-scheme', 'dark');
    localStorage.setItem('theme', 'dark'); // Save preference
};

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    root.style.setProperty('color-scheme', savedTheme);
}






const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div>Reddit Micro</div>

      {/* Search Bar */}
      <input type="text" placeholder="r/RedditMicro" className={styles.searchBar}/>

      {/* Light/Dark Mode Buttons*/}
      <div className={styles.buttons}>
        <Button icon={sunSvg} onclick={lightMode} className="" />
        <Button  icon={moonSvg} onclick={darkMode} className="" />
      </div>
    </nav>
  );
};
export default Navbar;
