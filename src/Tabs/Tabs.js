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
        <div className="buttons">
            <button className={stat === 1 ? "studyManagerTabActive": "studyManagerTab"} onClick={() => updateToggle(1)}>Study Manager</button>
            <button className={stat === 2 ? "patientsTabActive": "patientsTab"} onClick={() => updateToggle(2)}>Patients Manager</button>
        </div>
        <div className="list">
            <PatientList status={stat === 1 ? 'inactive' : ''}/>
            <StudyList status={stat === 2 ? 'inactive' : ''}/>
        </div>
    </div>
}