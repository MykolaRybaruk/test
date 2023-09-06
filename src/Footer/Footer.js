import React from "react";
import { useState } from "react";
import styles from './Footer.module.css';

export default function Footer() {
   const [time, setTime] = useState('');

   const newTime = () => {
    setTime(new Date().toLocaleTimeString());
   }

    setInterval(newTime, 1000);


    

    return <div className={styles.footer}>
        <div className={styles.copyright}>Copyright 2023 © All Rights Reserved</div>
        <div onChange={newTime} className={styles.nowIs}>Date: {new Date().toLocaleDateString()} Time: {time}</div>
    </div>
}