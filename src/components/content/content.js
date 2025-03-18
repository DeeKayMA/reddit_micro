import styles from './content.module.css';
import UserPost from '../UserPost/userPost';

const Content = () => {
    return(
        <div className={styles.content}>
            <h1>Content</h1>
            <UserPost />
        </div>
    )
}
export default Content;