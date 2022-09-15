import React from 'react'
import '../App.css';
import {db} from '../firebase'
import EmployeeItem from './EmployeeItem';
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot, deleteDoc, doc} from "firebase/firestore";
import {BrowserRouter as Router, Route, useNavigate} from 'react-router-dom';
export const EmployeeList = () => {
  const [listEmployees, setListEmployees] = useState([])
  const navigate = useNavigate();
  const handleAddNewEmployee = () =>{
    navigate('/EmployeeEdit');
  }
 
  useEffect(async () => {
    const q = await query(collection(db, 'Employee'), orderBy('EmployeeId', 'asc'))
    onSnapshot(q, (querySnapshot) => {
      setListEmployees(querySnapshot.docs.map(doc =>
        ({
          id: doc.id,
          data: doc.data()
        })
      ))
    })
  },[])

  return (
    <>
    <div>
       <div className='group-btn'>
          <button type='button' onClick={handleAddNewEmployee} >New Employee</button>
        </div>
        <div className='div-content'>
          <table className='tb-employees'>
            <thead>
            <tr>
              <th>Employee Name</th>
              <th>Age</th>
              <th>Position</th>
              <th>Email</th>
              <th>Aciton</th>
            </tr></thead>
            {listEmployees.length > 0
              ? listEmployees.map(employee =>
                <EmployeeItem key={employee.id} empObjId={employee.id} employee={employee.data}/>                
                )
                : <tr> <td colSpan={5}>List employee is empty !</td></tr>
              }
           
          </table>          
        </div>
    </div>
              </>
  )
}
