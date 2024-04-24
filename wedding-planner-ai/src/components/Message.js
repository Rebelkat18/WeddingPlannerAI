import jill from '../icons/jill.png';
import user from '../icons/user.png';
import styles from './Message.module.css';

export default function Message({ role, content }) {
    return (
        <div className={styles.wrapper}>
            <div>
                <img 
                    src={role === "assistant" ? jill : user}
                    className={styles.avatar}
                    alt="profile avatar"
                />
            </div>
            <div>
                <p>{content}</p>
            </div>
        </div>
    );
    }