import styles from './content.module.css';
import UserPost from '../UserPost/userPost';

const Content = (className) => {
    return(
        <div className={`${styles.content} ${className ? className : ""}`}>
            <h2>Main Content</h2>
            <UserPost />
        </div>
    )
}
export default Content;