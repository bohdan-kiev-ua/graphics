import Image from 'next/image'
import styles from './page.module.css'
import SideMenu from "@/app/components/graphs/SideMenu/SideMenu";
import Peoples from "@/app/components/graphs/Peoples/Peoples";
import GraphChart from "@/app/components/graphs/GraphChart/GraphChart";

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
            <SideMenu />
            <div className={styles.content}>
                <div className={styles.contentGraphRow}>
                    <GraphChart />
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
                            <Peoples name={'Bennett Hermanoff'} group={'Echo'} />
                            <Peoples name={'Maddie Wisinski'} group={'Charles'} />
                            <Peoples name={'Alex Motyka'} group={'Bravo'} />
                        </div>
                    </div>
                    <div className={styles.map}></div>
                </div>
            </div>
        </div>
    </main>
  )
}
