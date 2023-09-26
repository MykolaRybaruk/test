import React, {useState} from "react";
import styles from "./PatientFilter.module.css";

export default function PatientFilter({active}) {
    return <div className={styles.patientsFilter}>
        <div>
            <label>Filter: </label>
            <input type="search" />
        </div>

        <div>
            <label>From:</label>
            <input type="date" />
        </div>

        <div>
            <label>To:</label>
            <input type="date" />
        </div>

        <button type="button">Search</button>
        <button type="button" onClick={active} className={styles.addNew}>Add New Patient</button>
        <button type="button">Create New Order</button>
        <button type="button">Add New Patient and Create Order</button>
    </div>
}