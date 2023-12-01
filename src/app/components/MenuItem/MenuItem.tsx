import React from 'react';
import Image from 'next/image'
import styles from './MenuItem.module.css';

const MenuItem = ({text, icon, messages}: {text: string, icon: string, messages?: number}) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <Image
                    src={icon}
                    alt=""
                    className={styles.icon}
                    width={0}
                    height={0}
                    sizes="100%"
                />
                <div className={styles.title}>{text}</div>
            </div>
            {messages && (
                <div className={styles.messageContainer}>
                    <div className={styles.messageText}>{messages}</div>
                    <div className={styles.message} />
                </div>
            )}
        </div>
    );
};

export default MenuItem;