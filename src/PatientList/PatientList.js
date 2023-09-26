import React, {useState} from "react";
import AddPatient from "../AddPatient/AddPatient";
import PatientFilter from "../PatientFilter/PatientFilter";
import "./PatientList.css";
import OrderCreator from "../OrderCreator/OrderCreator";

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
      name: 'Filip',
      surname: 'Testerer',
      id: '26891564791',
      birthdate: '2001-12-22',
      sex: 'female',
      checked: false,
    }
  ];


export default function PatientList({status}) {
    const [addPatientButton, setAddPatientButton] = useState(false);
    const [patientList, setPatientList] = useState(patients);

    const addPatientHandler = () => {
      setAddPatientButton(true);
    }

    const closeAddingFormHandler = () => {
      setAddPatientButton(false);
    }

    const patientAdding = (patient) => {
      setPatientList([patient, ...patients]);
      console.log("15-08-2023" > "13-08-2023");
    }

    const orderCreatorHeightHandler = (height) => {
      console.log(height);
      return 500;
    }

    return <ol className={status}>
              <div className="patients">
                <PatientFilter newOrderActivator={() => orderCreatorHeightHandler()} active={addPatientHandler}/>
                {addPatientButton && <AddPatient patientAdding={patientAdding} status={'active'} hide={closeAddingFormHandler}/>}
                <div className="patientsArea">
                  {patientList.map(el => <li key={el.id} className="patientField" style={{background: patientList.indexOf(el) % 2 === 0 ? 'red' : 'green'}}>
                      <div>{el.name}</div>
                      <div>{el.surname}</div>
                      <div>{el.id}</div>
                      <div>{el.sex}</div>
                      <div>{el.birthdate}</div>
                      <div>context</div>
                      <div className="more">...</div>
                  </li>)}
                </div>
                <OrderCreator height={orderCreatorHeightHandler()}/>
              </div>
            </ol>
}