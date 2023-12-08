import React from 'react';
import styles from './page.module.css';
import SearchInput from "@/app/components/table/SearchInput/SearchInput";
import TableHead from "@/app/components/table/TableHead/TableHead";
import TableBodyCell from "@/app/components/table/TableBodyCell/TableBodyCell";

const Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tableContainer}>
                <SearchInput />
                <div className={styles.table}>
                    <TableHead />
                    <div className={styles.greyLine}/>
                </div>
                <TableBodyCell />
                <div className={styles.greyLine}/>
                <TableBodyCell />
                <div className={styles.greyLine}/>
                <TableBodyCell />
                <div className={styles.greyLine}/>
                <TableBodyCell />
                <div className={styles.greyLine}/>
            </div>
        </div>
    );
};

export default Page;