import React from "react";
import styles from "./OrderCreator.module.css";

export default function OrderCreator({display, orderCreatorOpener}) {

    return (
        <div className={styles.orderCreatorWrapper} style={{display: `${display}`}}>
            <div className={styles.searchBox}>
                <label>
                    <div>Choose the patient</div>
                    <input type="search" />
                </label>
            </div>
            <button className={styles.closeButton} onClick={() => orderCreatorOpener("none")}>Close</button>
            <div className={styles.orderCreator}>
                <img className={styles.image} src="../../img/model2.jpg" alt=""/>
                <div className={styles.round1}></div>
            </div>
        </div>
    )
}

//style={{height: `${height}px`}}
// <button className={styles.closeButton} onClick={() => orderCreatorOpener(0)}>Close</button>