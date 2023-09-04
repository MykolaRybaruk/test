import React from "react";
import { useState } from "react";
import styles from './Footer.module.css';

export default function Footer() {
    const [time, setTime] = useState();


    return <div className={styles.footer}>
        <div className={styles.copyright}>Copyright 2023 © All Rights Reserved</div>
        <div>Now is: {time}</div>
    </div>
}