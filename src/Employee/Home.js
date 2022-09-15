import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './Employee.css';
import {db} from '../firebase'
import EmployeeItem from './EmployeeItem';
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot, deleteDoc, doc} from "firebase/firestore";
import {Routes, BrowserRouter as Router, Route, useNavigate} from 'react-router-dom';
import { async } from '@firebase/util';
import EmployeeEdit from './EmployeeEdit';
import { EmployeeList } from './EmployeeList';


function Home() {
//   const [profile, setProfile] =useState({
//     profileObj :
//     {
//       userName : "",
//       age : "",email : "",
//       career:''
//     }
//   });
//   const submitForm = async(e) => 
//   {
//     let lastProfile = profile;
//     alert(lastProfile.profileObj.userName + " is " + lastProfile.profileObj.age + " years old, has an email : " + lastProfile.profileObj.email + ' and is ' + lastProfile.profileObj.career)
//     console.log(profile);
//     e.preventDefault();
//     // try {
//     //   await addDoc(collection(db, 'employee') ,{
//     //     Employee_Id: ,
//     //     Name: userName,
//     //     Age: age,
//     //     Career: career,
//     //     Email: email
//     //   })
//     // } catch (error) {
//     //   console.log(error)
//     // }
//   }

// const onTextChange = (event,key) =>{
//   const { name, value } = event.target;
//   setProfile(prevState=>({
//     ...prevState,
//     profileObj:{
//       ...prevState.profileObj,
//       [event.target.name] : event.target.value
//     }
    
//   }))
// }

// const handleChange = (event) =>{
//   setProfile(prevState=>({
//     ...prevState,
//     profileObj:{
//       ...prevState.profileObj,
//       career: event.target.value
//     }
//   }))
// }


  return (
    <>
    
    <div className="App">
      <div className="App-header">
        <img src={require('../images/logo/company_logo.png')} className="company-logo mb-3" alt="logo" />
        <p className='title'>Employee Management</p>
        <Router>
          <Routes>
            <Route  path="/" element={<EmployeeList/>}/>
            <Route  path="/employeeList" element={<EmployeeList/>}/>
            <Route  path="/employeeEdit" element={<EmployeeEdit />} />
            <Route path="/employeeEdit/:id" element={<EmployeeEdit />} />
          </Routes>
        </Router>
      </div>
    </div> 
    </>
  );
}

export default Home;
