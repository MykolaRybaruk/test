import React from "react";
import { useState } from "react";
import PatientList from '../PatientList/PatientList';
import StudyList from '../StudyList/StudyList';
import './Tabs.css';





export default function Tabs(props) {
    const [stat, setStat] = useState(1);

    const updateToggle = (id) => {
       setStat(id);
    }

    return <div>
        <button className={styles.studyManager} onClick={() => updateToggle(1)}>Study Manager</button>
        <button className={styles.patients}onClick={() => updateToggle(2)}>Patients</button>
        <PatientList status={stat === 2 ? 'hidden' : ''}/>
        <StudyList status={stat === 1 ? 'hidden' : ''}/>
    </div>
}