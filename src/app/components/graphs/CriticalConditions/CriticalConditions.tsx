import React from 'react';
import Image from 'next/image';
import styles from './CriticalConditions.module.css';

const data = [
    {
        title: 'Cell  5',
        percent: '2%',
        lastSeen: '4 Weeks',
        link: '#',
    },
    {
        title: 'Cell  24',
        percent: '2%',
        lastSeen: '4 Weeks',
        link: '#',
    },
]

const CriticalConditions = () => {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Critical Condition</h4>
            <div className={styles.lines}>
                {data.map((line, index) => (
                    <div className={styles.lineContainer}>
                        <div key={index} className={styles.line}>
                            <img
                                src="/images/profilePhoto.svg"
                                className={styles.profilePhoto}
                                alt=""
                            />
                            <div className={styles.titleContainer}>
                                <div className={styles.titleOpt}>GEO INFO</div>
                                <div className={styles.conditionName}>{line.title}</div>
                            </div>
                            <Image
                                src="/images/verticalLine.png"
                                className={styles.verticalLine}
                                alt=""
                                width={1}
                                height={14}
                            />
                            <div className={styles.circleContainer}>
                                <div className={styles.percent}>{line.percent}</div>
                                <img
                                    src="/images/ring.svg"
                                    className={styles.circleImage}
                                    alt=""
                                />
                            </div>
                            <div className={styles.lastSeen}>
                                Last Seen: {line.lastSeen}
                            </div>
                            <div className={styles.seeMore}>
                                See more
                            </div>
                            <div className={styles.seeMoreArrow}>
                                <Image
                                    src="/images/seeMoreArrow.svg"
                                    alt=""
                                    width={11}
                                    height={8}
                                />
                            </div>
                        </div>
                        {data.length - 1 !== index && <div className={styles.greyLine}/>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CriticalConditions;