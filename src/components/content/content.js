import styles from './content.module.css';
import UserPost from '../UserPost/userPost';

const Content = () => {
    return(
        <div className={styles.content}>
            <h2>Main Content</h2>
            <UserPost />
        </div>
    )
}
export default Content;