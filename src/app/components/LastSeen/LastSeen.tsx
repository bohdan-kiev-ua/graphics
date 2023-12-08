import React from 'react';
import styles from './LastSeen.module.css';

type LastSeenProps = {
    title: string;
}

const LastSeen = ({title}: LastSeenProps) => {
    return (
        <div className={styles.container}>
            Last Seen: {title}
        </div>
    );
};

export default LastSeen;