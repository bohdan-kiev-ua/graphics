import React from 'react';
import Image from 'next/image';
import styles from './SearchInput.module.css';

const SearchInput = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <Image
                    src="/icons/searchIcon.svg"
                    alt=""
                    width={24}
                    height={24}
                />
                <input className={styles.input} placeholder={'Search...'}/>
            </div>
            <div className={styles.line} />
        </div>
    );
};

export default SearchInput;