import React, {useState} from "react";
import styles from "./AddPatient.module.css";

export default function AddPatient() {
    return <div className={styles.form}>
        <div className={styles.inputWrapper}>
            <div>
                <label>Name:</label>
                <input type="text" minLength={2} required/>
            </div>
            <div>
                <label>Surname:</label>
                <input type="text" minLength={2} required/>
            </div>
            <div>
                <label>Pesel:</label>
                <input type="text" minLength={2} required/>
            </div>
            <div>
                <label>BirthDate:</label>
                <input type="date" minLength={2} required/>
            </div>
            <div>
                <label>Sex:</label>
                <select>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        </div>
        <button type="submit">Add Patient</button>
    </div>
}