import React from 'react';
import Image from 'next/image';
import styles from './TodayGraph.module.css';

type TodayGraphProps = {

}

const TodayGraph = ({}: TodayGraphProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.dateContainer}>
                <div className={styles.date}>05</div>
                <div className={styles.daily}>Today</div>
            </div>
            <div className={styles.image}>
                <Image
                    src="/images/chart-28.png"
                    alt=""
                    width={48}
                    height={28}
                    sizes="100%"
                />
            </div>
        </div>
    );
};

export default TodayGraph;