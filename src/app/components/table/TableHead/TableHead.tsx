import React from 'react';
import styles from './TableHead.module.css';
import Checkbox from "@/app/components/Checkbox/Checkbox";
import Image from "next/image";

const TableHead = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headLeft}>
                <div className={styles.checkbox}>
                    <Checkbox />
                </div>
                <div className={styles.nodeId}>
                    Node ID (GUID)
                </div>
                <div className={styles.nodeId}>
                    Status
                    <Image
                        src="/icons/sortArrow.svg"
                        alt=""
                        width={20}
                        height={20}
                    />
                </div>
                <div className={styles.battery}>
                    Battery
                    <Image
                        src="/icons/sortArrow.svg"
                        alt=""
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            <div>
                <div className={styles.lastMessage}>
                    Last Message
                    <Image
                        src="/icons/sortArrow.svg"
                        alt=""
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </div>
    );
};

export default TableHead;