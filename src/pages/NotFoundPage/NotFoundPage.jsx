import { Link } from 'react-router-dom';
import styles from "./NotFoundPage.module.css";


const NotFound = () => {
    return (
        <div className={styles.wraper}>
            <p className={styles.title}>Page not found...</p>
            <Link to={`/`} className={styles.title}>Go Home page</Link>
        </div>
    )
}

export default NotFound;