import Image from 'next/image'
import styles from './page.module.css'
import MenuItem from "@/app/components/MenuItem/MenuItem";

export default function Home() {
  return (
    <main className={styles.container}>
        <Image
            src="/images/header-bg.png"
            alt=""
            className={styles.headerImage}
            width={0}
            height={0}
            sizes="100%"
        />
        <div className={styles.profile}>User</div>
        <div className={styles.flexWrapper}>
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
            <div className={styles.content}>
                <div className={styles.contentGraphRow}>
                    <div className={styles.graphContainer}></div>
                    <div className={styles.dailyGraphContainer}>
                        <div className={styles.dailyGraph}></div>
                        <div className={styles.dailyGraph}></div>
                    </div>
                    <div className={styles.totalGraphContainer}>
                        <div className={styles.totalTasks}></div>
                        <div className={styles.todayGraph}></div>
                    </div>
                </div>
                <div className={styles.mapContainer}>
                    <div>
                        <div className={styles.criticalConditions}></div>
                        <div className={styles.developersContainer}>
                            <div className={styles.developers}></div>
                            <div className={styles.developers}></div>
                            <div className={styles.developers}></div>
                        </div>
                    </div>
                    <div className={styles.map}></div>
                </div>
            </div>
        </div>
    </main>
  )
}
