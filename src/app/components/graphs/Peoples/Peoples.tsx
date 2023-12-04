import React from 'react';
import styles from "./Peoples.module.css";

type PeoplesProps = {
    name: string;
    group: string;
}

const Peoples = ({name, group}: PeoplesProps) => {
    return (
        <div className={styles.developers}>
            <div className={styles.group}>{group}</div>
            <div className={styles.name}>{name}</div>
        </div>
    );
};

export default Peoples;