import styles from './content.module.css';
import UserPost from '../UserPost/userPost';

const Content = (className) => {
    return(
        <main className={`${styles.content} ${className ? className : ""}`}>
            <UserPost />
        </main>
    )
}
export default Content;