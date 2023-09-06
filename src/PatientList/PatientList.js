import React from "react";
import styles from "./PatientList.module.css";

const patients = [
    {
      name: 'Andrzej',
      surname: 'Testerer',
      id: '155486123791',
      birthdate: '2010-02-12',
      sex: 'male',
      checked: false,
    },
    {
      name: 'Monika',
      surname: 'Bieruńska',
      id: '791597124597',
      birthdate: '1995-06-01',
      sex: 'male',
      checked: false,
    },
    {
      name: 'Andrzej',
      surname: 'Testerer',
      id: '26891564791',
      birthdate: '2001-12-22',
      sex: 'female',
      checked: false,
    }
  ];

export default function PatientList(props) {
    return <ol className={styles.patients}>
        {patients.map(el => <li>
            <div>{el.name}</div>
            <div>{el.surname}</div>
            <div>{el.id}</div>
            <div>{el.sex}</div>
            <div>{el.birthdate}</div>
        </li>)}
    </ol>
}