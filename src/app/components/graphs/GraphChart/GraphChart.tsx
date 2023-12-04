'use client'

import React, {useState} from 'react';
import Image from 'next/image'
import styles from "./GraphChart.module.css";
import { Chart } from "react-google-charts";

type Types = '7d' | '2w' | '1m' | '3m' | '2023';

export const data = {
    '7d': [
        ["Year", "Sales"],
        ["2004", 1000],
        ["2005", 1170],
        ["2006", 660],
        ["2007", 1030],
    ],
    '2w': [
        ["Year", "Sales"],
        ["2004", 1300],
        ["2005", 1170],
        ["2006", 660],
        ["2007", 1030],
    ],
    '1m': [
        ["Year", "Sales"],
        ["2004", 1400],
        ["2005", 1170],
        ["2006", 660],
        ["2007", 1030],
    ],
    '3m': [
        ["Year", "Sales"],
        ["2004", 1500],
        ["2005", 1170],
        ["2006", 660],
        ["2007", 1030],
    ],
    '2023': [
        ["Year", "Sales"],
        ["2004", 800],
        ["2005", 1170],
        ["2006", 660],
        ["2007", 1030],
    ],
};

export const options = {
    title: "",
    curveType: "function",
    legend: { position: "bottom" },
    series: [{ color: "#E7711B" }],
};

const GraphChart = () => {
    const [selectedType, setSelectedType] = useState<Types>('1m');
    return (
        <div className={styles.graphContainer}>
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>Light Coverage</div>
                    <div className={styles.subtitle}>1 Month </div>
                </div>
                <div className={styles.params}>
                    <div className={styles.range}>
                        <div
                            className={selectedType === '7d' ? styles.typeSelected : styles.type}
                            onClick={() => setSelectedType('7d')}
                        >7d</div>
                        <div
                            className={selectedType === '2w' ? styles.typeSelected : styles.type}
                            onClick={() => setSelectedType('2w')}
                        >2w</div>
                        <div
                            className={selectedType === '1m' ? styles.typeSelected : styles.type}
                            onClick={() => setSelectedType('1m')}
                        >1m</div>
                        <div
                            className={selectedType === '3m' ? styles.typeSelected : styles.type}
                            onClick={() => setSelectedType('3m')}
                        >3m</div>
                        <div
                            className={selectedType === '2023' ? styles.typeSelected : styles.type}
                            onClick={() => setSelectedType('2023')}
                        >2023</div>
                    </div>
                    <Image
                        src={'/icons/download.svg'}
                        alt=""
                        width={25}
                        height={25}
                        sizes="100%"
                    />
                    <div></div>
                </div>
            </div>
            <div>
                <Chart
                    className={styles.chart}
                    chartType="LineChart"
                    height="255px"
                    data={data[selectedType]}
                    options={options}
                />
            </div>
        </div>
    );
};

export default GraphChart;