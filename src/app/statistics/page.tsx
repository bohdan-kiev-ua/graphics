import React from 'react';
import styles from './page.module.css';
import SearchInput from "@/app/components/table/SearchInput/SearchInput";
import Checkbox from "@/app/components/Checkbox/Checkbox";
import TableHead from "@/app/components/table/TableHead/TableHead";

const Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tableContainer}>
                <SearchInput />
                <div className={styles.table}>
                    <TableHead />
                </div>
            </div>
        </div>
    );
};

export default Page;