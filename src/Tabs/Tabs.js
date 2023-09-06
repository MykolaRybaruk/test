import React from "react";
import PatientList from '../PatientList/PatientList';
import StudyList from '../StudyList/StudyList';
import './Tabs.module.css';




export default function Tabs(props) {
    return <div>
        <button>Study Manager</button>
        <button>Patients</button>
        <PatientList />
        <StudyList />
    </div>
}