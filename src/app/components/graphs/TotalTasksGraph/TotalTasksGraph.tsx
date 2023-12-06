import React from 'react';
import Image from 'next/image';
import styles from './TotalTasksGraph.module.css';

type TodayGraphProps = {

}

const TotalTasksGraph = ({}: TodayGraphProps) => {
    return (
        <div className={styles.container}>
            <Image
                src="/images/clock.png"
                alt=""
                width={62.6}
                height={54}
                sizes="100%"
            />
            <div className={styles.dateContainer}>
                <div className={styles.date}>5</div>
                <div className={styles.daily}>Total Tasks</div>
            </div>
        </div>
    );
};

export default TotalTasksGraph;