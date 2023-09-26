import React from "react";
import { useState } from "react";
import PatientList from '../PatientList/PatientList';
import StudyList from '../StudyList/StudyList';
import Statistics from "../Statistics/Statistics";
import './Tabs.css';





export default function Tabs(props) {
    const [stat, setStat] = useState(1);

    const updateToggle = (id) => {
       setStat(id);
    }

    return <div>
        <div className="buttons">
            <div>
                <button className={stat === 1 ? "studyManagerTabActive": "studyManagerTab"} onClick={() => updateToggle(1)}>Study Manager</button>
                <button className={stat === 2 ? "patientsTabActive": "patientsTab"} onClick={() => updateToggle(2)}>Patients Manager</button>
             </div>
                <button className={stat === 3 ? "statisticsTabActive" : "statisticsTab"} onClick={() => updateToggle(3)}>Statistics</button>
        </div>
        <div className="list">
            <PatientList status={stat === 2 ? '' : 'inactive'} />
            <StudyList status={stat === 1 ? '' : 'inactive'} />
            <Statistics status={stat === 3 ? '' : 'inactive'} />
        </div>
    </div>
}