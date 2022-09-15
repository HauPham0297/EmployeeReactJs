import React from 'react';
import EmployeeAction from './EmployeeAction'
function EmployeeItem({empObjId, employee})
{
    return(
        <tr>
            <td>{employee.Name}</td>
            <td>{employee.Age}</td>
            <td>{employee.Position}</td>
            <td>{employee.Email}</td>
            <td>
                <EmployeeAction empObjId={empObjId} employee={employee}/>
            </td>
            </tr>
    );
}

export default EmployeeItem;