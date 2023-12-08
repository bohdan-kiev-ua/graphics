import React from 'react';
import styles from './PercentRound.module.css';

type PercentRoundProps = {
    text: string;
}

const PercentRound = ({text}: PercentRoundProps) => {
    return (
        <div className={styles.circleContainer}>
            <div className={styles.percent}>{text}</div>
            <img
                src="/images/ring.svg"
                className={styles.circleImage}
                alt=""
            />
        </div>
    );
};

export default PercentRound;