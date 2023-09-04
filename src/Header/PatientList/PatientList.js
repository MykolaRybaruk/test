import React from "react";
import styles from "./PatientList.module.css";

export default function PatientList(props) {
    return <ol className={styles.patients}>
        {props.patients.map(el => <li>
            <div>{el.name}</div>
            <div>{el.surname}</div>
            <div>{el.id}</div>
            <div>{el.sex}</div>
            <div>{el.birthdate}</div>
        </li>)}
    </ol>
}