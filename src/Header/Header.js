import React from "react"
import styles from './Header.module.css';

export default function Header() {
    return <div className={styles.header}>
        <div className={styles.logo}>PergamonMED Gmbh</div>
        <div className={styles.headerLink}>pergamonmed.com</div>
        <div className={styles.support}>Support: +48 61 222 20 17</div>
    </div>
}