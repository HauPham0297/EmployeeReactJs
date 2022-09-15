import { doc, where,addDoc, query, collection,orderBy, onSnapshot, getDoc,setDoc, limit, limitToLast } from 'firebase/firestore';
import { db } from '../firebase'
import { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

function EmployeeEdit() {
  const { id } = useParams();
  const employeId = id
  const [employeeData, setEmployeeData] = useState({})
  const navigate = useNavigate();
  const handleSubmitEmployee = async (e,employeeData) => {
    let errMess = '';
    e.preventDefault();
    if (employeeData.Name == '')
    {
      errMess += 'Employee Name is requred \r\n' 
      document.getElementById('employeeName').style.backgroundColor = 'peachpuff'
    }else  document.getElementById('employeeName').style.backgroundColor = 'rgb(232, 240, 254)'
    if(employeeData.Position == '')
    {
      errMess += 'Position is requred \r\n' 
      document.getElementById('position').style.backgroundColor = 'peachpuff'
    }else document.getElementById('position').style.backgroundColor = 'rgb(232, 240, 254)'

    if(errMess != '')
      alert(errMess)      
    else {
      if(employeId != null)
      {
        await setDoc(doc(db, 'Employee', employeId), employeeData, { merge: true})
        alert('Employee is updated')
        navigate('/employeeList');
      }else{        
        //add new data
        let docRef = await addDoc(collection(db, "Employee"), employeeData);
        alert('Employee is added')
        navigate('/employeeList');
        console.log("Document written with ID: ", docRef);
        
      }
    }
    
  }

  const onTextFormChange = (event, key) => {
    const { name, value } = event.target;
    const keyObj = Object.keys(employeeData);
    keyObj.map((keyName,indx)=>{
      if(keyName == key)
      {
        employeeData[key] = value
        setEmployeeData({...employeeData})
      }
    })   
  }

  const onSelectedPosition = (event) => {
    const { name, value } = event.target;
    employeeData.Position = value
    setEmployeeData({ ...employeeData })    
  }

  useEffect(async () => {
    if (employeId && employeId !== '') {
      const empRef = doc(db, "Employee", employeId);
      const emp = await getDoc(empRef);
      if (emp.exists()) {
        console.log(JSON.stringify(emp.data()))
        setEmployeeData(emp.data())
      }
    }
    else setEmployeeData({
      Age: null,
      Email: '',
      EmployeeId: null,
      Name: '',
      Position: ''
    })
  }, [])
  return (
    <div>
      <form className='employee-form-submit' >
        <div className='row mb-2'>
          <div className='col-12'>
            <label className="lbl-form col-3 float-left">Name:</label>
            <div className='col-9 float-left'>
              <input type="text" id='employeeName' name="Name" onChange={(e) => onTextFormChange(e, "Name")} className='input-form' value={employeeData.Name} />
            </div>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-12'>
            <label className="lbl-form col-3 float-left">Age:</label>
            <div className='col-9 float-left'>
              <input type="text" name="Age" onChange={(e) => onTextFormChange(e, "Age")} value={employeeData.Age} className="input-form" />
            </div>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-12'>
            <label className='lbl-form col-3'>Position</label>
            <div className='col-9 float-left'>
              <select className='select-position' id='position' value={employeeData.Position} onChange={(e) => onSelectedPosition(e)}>
                <option value=""></option>
                <option value="tester">Tester</option>
                <option value="pm">PM</option>
                <option selected value="ba">BA</option>
                <option value="developer">Developer</option>
              </select>
            </div>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-12'>
            <label className="lbl-form col-3 float-left">Email:</label>
            <div className='col-9 float-left'>
              <input type="text" name="Email" onChange={(e) => onTextFormChange(e, "Email")} className="input-form" value={employeeData.Email} />
            </div>
          </div>
        </div>
        <div className='row mt-3 '>
          <input className='btn-submit' onClick={(e) => handleSubmitEmployee(e,employeeData)} type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default EmployeeEdit;