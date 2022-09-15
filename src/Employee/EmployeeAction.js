import {collection, query, orderBy, onSnapshot, deleteDoc, doc} from "firebase/firestore";
import {Routes, BrowserRouter as Router, Route, useNavigate, json} from 'react-router-dom';
import {db} from '../firebase'
function EmployeeAction({empObjId, employee})
{
  const navigate = useNavigate();
  const handleDeleteEmployee =  async(empId) =>{
      if(window.confirm('Delete employee, are you sure ?'))
      {
        let empData = doc(db,'Employee',empId)        
        try {
          await deleteDoc(empData)
        } catch (error) {
          console.log(error)
        }
      }
    }
  
  const handleOpenEmployeeDetail = (empId) =>{
    navigate('/EmployeeEdit/' + empId);
  }
  
  return(
    <div >
        <button type="button" onClick={()=> handleOpenEmployeeDetail(empObjId)} className="btn btn-primary btn-edit-employee">Edit</button> 
        <button type="button" onClick={()=>handleDeleteEmployee(empObjId)} className="btn btn-danger btn-delete-employee">Delete</button> 
    </div>
  );
}

export default EmployeeAction;