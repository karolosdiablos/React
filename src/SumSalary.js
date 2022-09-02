import { useEffect, useState } from "react";
const SumSalary = (({usersArr}) =>{
    const [salary,setSalary] = useState(0);

    useEffect(() =>{
        let tmpSal=0;
   
        usersArr.map((item) => {
          tmpSal+=parseInt(item.salary);
          setSalary(tmpSal);
          
          })
    },[usersArr])

    return (
        <tr>
            <td>
                Łączna wypłata: 
            </td>
            <td colSpan="5">
                {salary} zł
            </td>
        </tr>
    )
})

export default SumSalary;