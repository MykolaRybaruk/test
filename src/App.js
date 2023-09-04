import React from 'react';
import Header from './Header/Header';
import PatientList from './Header/PatientList/PatientList';
import Footer from './Footer/Footer';
import './App.css';

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

export default function App() {
  return (
    <div className="App">
     <Header />
     <PatientList patients={patients} />
     <Footer />
    </div>
  );
}
