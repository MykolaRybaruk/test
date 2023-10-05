import React from "react";
import styles from "./OrderCreator.module.css";

export default function OrderCreator({display, orderCreatorOpener}) {

    return (
        <div className={styles.orderCreatorWrapper} style={{display: `${display}`}}>
            <button className={styles.closeButton} onClick={() => orderCreatorOpener("none")}>{'<-- Return'}</button>
            <div className={styles.orderCreator}>
                <img className={styles.image} src="../../img/model2.jpg" alt=""/>
                <div className={styles.head}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Head</p>
                </div>
                <div className={styles.wholeBody}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Whole body</p>
                </div>
            </div>
        </div>
    )
}

//style={{display: `${display}`}}