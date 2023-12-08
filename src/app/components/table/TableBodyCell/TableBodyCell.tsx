import React from 'react';
import styles from './TableBodyCell.module.css';
import Checkbox from "@/app/components/Checkbox/Checkbox";
import Image from "next/image";
import LastSeen from "@/app/components/LastSeen/LastSeen";
import PercentRound from "@/app/components/PercentRound/PercentRound";

const TableBodyCell = () => {
    return (
        <div className={styles.container}>
            <div className={styles.checkbox}>
                <Checkbox />
            </div>
            <div className={styles.nodeId}>
                Cell 1
            </div>
            <div className={styles.nodeId}>
                <LastSeen title={'4 Weeks'}/>
            </div>
            <div className={styles.battery}>
                <PercentRound text={'90%'} />
            </div>
            <div className={styles.lastMessage}>
                <div className={styles.text}>100 lux</div>
                <div className={styles.text}>57%</div>
                <div className={styles.text}>25°C</div>
                <div className={styles.text}>80%</div>
            </div>
        </div>
    );
};

export default TableBodyCell;