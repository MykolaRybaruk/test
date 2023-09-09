import React, {useState} from "react";
import styles from "./AddPatient.module.css";

export default function AddPatient() {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [pesel, setPesel] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [sex, setSex] = useState('Male');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const surNameChangeHandler = (event) => {
        setSurName(event.target.value);
    }

    const peselChangeHandler = (event) => {
        setPesel(event.target.value);
    }

    const birthdateChangeHandler = (event) => {
        setBirthdate(event.target.value);
    }

    const sexChangeHandler = (event) => {
        setSex(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const patient = {
            name: name,
            surname: surName,
            id: pesel,
            birthdate: birthdate,
            sex: sex,
            checked: false,
        }
        console.log(patient);
        setName('');
        setSurName('');
        setPesel('');
        setBirthdate('');
        setSex('Male');
    }

    return <div className={styles.form}>
        <div className={styles.inputWrapper}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={nameChangeHandler} minLength="2" required/>
            </div>
            <div>
                <label>Surname:</label>
                <input onChange={surNameChangeHandler} value={surName} type="text" minLength="2" required/>
            </div>
            <div>
                <label>Pesel:</label>
                <input onChange={peselChangeHandler} value={pesel} type="number" min="9" required/>
            </div>
            <div>
                <label>BirthDate:</label>
                <input onChange={birthdateChangeHandler} value={birthdate} type="date" required/>
            </div>
            <div>
                <label>Sex:</label>
                <select onChange={sexChangeHandler} value={sex}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        </div>
        <button onClick={onSubmit} type="submit">Add Patient</button>
    </div>
}