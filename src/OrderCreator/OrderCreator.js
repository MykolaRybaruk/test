import React from "react";
import styles from "./OrderCreator.module.css";

export default function OrderCreator(props) {
    return (
        <div className="orderCreatorWrapper">
            <p>OrderCreator</p>
            <img className={styles.image} style={{height: `${props.height}px`}} src="../../img/model2.jpg" alt=""/>
            <div className={styles.head}>
                <div className={styles.round}></div>
                Head
            </div>
            <div>Kregoslup</div>
            <div>nogi</div>
        </div>
    )
}