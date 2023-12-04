import React from 'react';
import Image from 'next/image'
import styles from './SideMenu.module.css';
import MenuItem from "@/app/components/graphs/MenuItem/MenuItem";

const SideMenu = () => {
    return (
        <div className={styles.sidebar}>
            <div>
                <div className={styles.sidebarTitle}>Good x (Morning, Afternoon, Evening, User</div>
                <div className={styles.sidebarMenu}>
                    <MenuItem text={'Dashboard'} icon={'/icons/dasboard.svg'} />
                    <MenuItem text={'Tasks'} icon={'/icons/tasks.svg'} />
                    <MenuItem text={'Map'} icon={'/icons/map.svg'} />
                    <MenuItem text={'Message'} icon={'/icons/message.svg'} messages={3}/>
                    <MenuItem text={'Calendar'} icon={'/icons/calendar.svg'} />
                </div>
            </div>
            <div className={styles.teamContainer}>
                <div className={styles.teamData}>
                    <div className={styles.teamIcon} />
                    <div className={styles.teamDataRight}>
                        <div>
                            <div className={styles.teamTitle}>Team Echo</div>
                            <div className={styles.teamSubtitle}>5 people</div>
                        </div>
                        <div className={styles.teamUpdatesContainer}>
                            <div className={styles.teamUpdates}>See Update</div>
                            <Image
                                src="/icons/orangeLine.svg"
                                alt=""
                                className={styles.line}
                                width={0}
                                height={0}
                                sizes="100%"
                            />
                        </div>
                    </div>
                </div>
                <Image
                    src="/icons/arrowLink.svg"
                    alt=""
                    className={styles.line}
                    width={0}
                    height={0}
                    sizes="100%"
                />
            </div>
        </div>
    );
};

export default SideMenu;