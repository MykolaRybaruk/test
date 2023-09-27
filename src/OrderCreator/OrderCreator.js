import React from "react";
import styles from "./OrderCreator.module.css";

export default function OrderCreator({height, orderCreatorOpener}) {
    //let testHeight = 'hidden';
    // const isHidden = (height) => {
    //     if (height !== 0) {
    //       testHeight = 'flex';
    //     }
    // };

    return (
        <div className={styles.orderCreatorWrapper} style={{height: `${height}px`}}>
            <button type="button" className={styles.closeButton} onClick={() => orderCreatorOpener(0)}>Close</button>
            <img className={styles.image} src="../../img/model2.jpg" alt=""/>
        </div>
    )
}

//style={{height: `${height}px`}}