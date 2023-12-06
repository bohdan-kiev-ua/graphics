import React from 'react';
import Image from 'next/image';
import styles from './DailyGraph.module.css';

type PerTimeGraphProps = {

}

const DailyGraph = () => {
    return (
        <div className={styles.container}>
            <div className={styles.dateContainer}>
                <div className={styles.date}>05</div>
                <div className={styles.daily}>Daily</div>
            </div>
            <Image
                src="/images/chart-21.png"
                alt=""
                width={48}
                height={21}
                sizes="100%"
            />
        </div>
    );
};

export default DailyGraph;