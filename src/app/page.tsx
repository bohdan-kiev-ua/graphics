import Image from 'next/image'
import styles from './page.module.css'
import SideMenu from "@/app/components/graphs/SideMenu/SideMenu";
import Peoples from "@/app/components/graphs/Peoples/Peoples";
import GraphChart from "@/app/components/graphs/GraphChart/GraphChart";
import DailyGraph from "@/app/components/graphs/DailyGraph/DailyGraph";
import WeeklyGraph from "@/app/components/graphs/WeeklyGraph/WeeklyGraph";
import TodayGraph from "@/app/components/graphs/TodayGraph/TodayGraph";
import TotalTasksGraph from "@/app/components/graphs/TotalTasksGraph/TotalTasksGraph";
import CriticalConditions from "@/app/components/graphs/CriticalConditions/CriticalConditions";

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
                        <DailyGraph />
                        <WeeklyGraph />
                    </div>
                    <div className={styles.totalGraphContainer}>
                        <TotalTasksGraph />
                        <TodayGraph />
                    </div>
                </div>
                <div className={styles.mapContainer}>
                    <div>
                        <CriticalConditions />
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
