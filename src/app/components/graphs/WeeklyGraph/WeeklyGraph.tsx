import React from 'react';
import Image from 'next/image';
import styles from './WeeklyGraph.module.css';

type WeeklyGraphProps = {

}

const WeeklyGraph = () => {
    return (
        <div className={styles.container}>
            <div className={styles.dateContainer}>
                <div className={styles.date}>27</div>
                <div className={styles.daily}>Weekly</div>
            </div>
            <Image
                src="/images/chart-25.png"
                alt=""
                width={48}
                height={25}
                sizes="100%"
            />
        </div>
    );
};

export default WeeklyGraph;