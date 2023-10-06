import React, { useState } from "react";
import AddPatient from "../AddPatient/AddPatient";
import PatientFilter from "../PatientFilter/PatientFilter";
import "./PatientList.css";
import OrderCreator from "../OrderCreator/OrderCreator";

const patients = [
  {
    name: "Andrzej",
    surname: "Testerer",
    id: "155486123791",
    birthdate: "2010-02-12",
    sex: "male",
    checked: false,
  },
  {
    name: "Monika",
    surname: "Bieruńska",
    id: "791597124597",
    birthdate: "1995-06-01",
    sex: "male",
    checked: false,
  },
  {
    name: "Filip",
    surname: "Testerer",
    id: "26891564791",
    birthdate: "2001-12-22",
    sex: "female",
    checked: false,
  },
  {
    name: "Janek",
    surname: "Testerer",
    id: "26452564791",
    birthdate: "2012-11-02",
    sex: "male",
    checked: false,
  },
  {
    name: "Rafał",
    surname: "Pankoswki",
    id: "26891457841",
    birthdate: "1992-04-17",
    sex: "male",
    checked: false,
  },
  {
    name: "Lina",
    surname: "Miłoska",
    id: "568984457841",
    birthdate: "1998-06-23",
    sex: "female",
    checked: false,
  },
];

export default function PatientList({ status }) {
  const [addPatientButton, setAddPatientButton] = useState(false);
  const [patientList, setPatientList] = useState(patients);
  const [orderCreatorHeight, setOrderCreatorHeight] = useState("none");
  const addPatientHandler = () => {
    setAddPatientButton(true);
  };

  const closeAddingFormHandler = () => {
    setAddPatientButton(false);
  };

  const patientAdding = (patient) => {
    setPatientList([patient, ...patients]);
    console.log("15-08-2023" > "13-08-2023");
  };

  const orderCreatorOpener = (display) => {
    setOrderCreatorHeight(display);
  };

  return (
    <ol className={status}>
      <div className="patients">
        <PatientFilter
          active={addPatientHandler}
          orderCreatorOpener={orderCreatorOpener}
        />
        {addPatientButton && (
          <AddPatient
            patientAdding={patientAdding}
            status={"active"}
            hide={closeAddingFormHandler}
          />
        )}
        <OrderCreator
          display={orderCreatorHeight}
          orderCreatorOpener={orderCreatorOpener}
        />
        <div className="tableStructureWrapper">
          <div className="tableStructure">
            <div>Name</div>
            <div>Surname</div>
            <div>PESEL</div>
            <div>Sex</div>
            <div>BirthDate</div>
            <div>Last Study Date</div>
            <div>More options</div>
          </div>
        </div>
        <div className="patientsArea">
          {patientList.map((el) => (
            <li
              key={el.id}
              className="patientField"
              style={{
                background:
                  patientList.indexOf(el) % 2 === 0
                    ? "rgb(39, 108, 112)"
                    : "rgb(66, 190, 197)",
              }}
            >
              <div className="patientName">{el.name}</div>
              <div>{el.surname}</div>
              <div>{el.id}</div>
              <div>{el.sex}</div>
              <div>{el.birthdate}</div>
              <div>N/A</div>
              <div>
                <button className="more">...options</button>
              </div>
            </li>
          ))}
        </div>
      </div>
    </ol>
  );
}
