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
            <button className="studyManagerTab" onClick={() => updateToggle(1)}>Study Manager</button>
            <button className="patientsTab" onClick={() => updateToggle(2)}>Patients</button>
        </div>

        <PatientList status={stat === 1 ? 'inactive' : ''}/>
        <StudyList status={stat === 2 ? 'inactive' : ''}/>
    </div>
}