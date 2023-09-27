import React from "react";
import styles from "./OrderCreator.module.css";

export default function OrderCreator({height, orderCreatorOpener}) {
    return (
        <div className="orderCreatorWrapper">
            <button onClick={() => orderCreatorOpener(0)}>Close</button>
            <p>OrderCreator</p>
            <img className={styles.image} style={{height: `${height}px`}} src="../../img/model2.jpg" alt=""/>
            <div className={styles.head}>
                <div className={styles.round}></div>
                Head
            </div>
            <div>Kregoslup</div>
            <div>nogi</div>
            <button>Create Order</button>
        </div>
    )
}