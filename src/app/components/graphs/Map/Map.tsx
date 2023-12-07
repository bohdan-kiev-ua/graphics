'use client'

import React from 'react';
import styles from './Map.module.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {relativizeURL} from "next/dist/shared/lib/router/utils/relativize-url";

const position = [51.505, -0.09]

const Map = () => {
    return (
        <div className={styles.container}>
            <MapContainer center={position} zoom={14} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;