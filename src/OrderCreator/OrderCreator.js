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
                
                <div className={styles.neck}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Neck</p>
                </div>

                <div className={styles.shoulder}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Shoulder</p>
                </div>

                <div className={styles.humerus}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Humerus</p>
                </div>

                <div className={styles.elbow}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Elbow</p>
                </div>

                <div className={styles.forearm}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Forearm</p>
                </div>

                <div className={styles.wrist}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Wrist</p>
                </div>

                <div className={styles.hand}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Hand</p>
                </div>

                <div className={styles.chest}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Chest</p>
                </div>

                <div className={styles.spineT}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Spine-T</p>
                </div>

                <div className={styles.spineL}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Spine-L</p>
                </div>

                <div className={styles.wholeSpine}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Whole spine</p>
                </div>

                <div className={styles.abdomen}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Abdomen</p>
                </div>

                <div className={styles.pelvis}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Pelvis</p>
                </div>

                <div className={styles.hip}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Hip</p>
                </div>

                <div className={styles.femur}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Femur</p>
                </div>

                <div className={styles.knee}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Knee</p>
                </div>

                <div className={styles.tibia}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Tibia</p>
                </div>

                <div className={styles.ankle}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Ankle</p>
                </div>

                <div className={styles.foot}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Foot</p>
                </div>

                <div className={styles.longBone}>
                    <div className={`${styles.round} ${styles.round}`}></div>
                    <p className={styles.bodyPartName}>Longbone</p>
                </div>
            </div>
            <button>Create Order</button>
        </div>
    )
}

//style={{display: `${display}`}}