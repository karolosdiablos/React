
import { useState } from "react";
import { useEffect } from "react";
const Row = (({usersArr,setUsersArr, DeleteRow, DeleteAll, EditRow}) => {
  const [sumSalary, setSumSalary] = useState(0);
  const [sumSkill,setSumSkill] = useState([]);


  useEffect(() =>{
    let tmpSal=0;
    let tmp={};
   
    //console.log("Dl tablicy: "+usersArr.length)

    if (usersArr.length>0) {
        usersArr.map((item) => {

          Object.keys(item.skills).forEach((skill) => {
            tmp[skill] ? tmp[skill]+=1 : tmp[skill]=1
          })
          setSumSkill(tmp);

      
          

        tmpSal+=parseInt(item.salary);
        setSumSalary(tmpSal);  
        })
    } else {
      setSumSalary(0);
      setSumSkill([])
    }
  },[usersArr])
    return (
      <>
      {usersArr.map((a, index) =>
        <tr key={a.index}>
          
          <td>{a.name}</td>
          <td>{a.surname}</td>
          <td>{a.salary} zł</td>
          <td>
            
            <ul>
                {Object.entries(a.skills).map((skill) =>
                <li>
                  {skill[0]}: {skill[1]}
                </li>
                )}
          </ul>
          </td>
          <td><button type="button" onClick={() => DeleteRow(usersArr, setUsersArr, index)}>Usuń Mnie</button></td>
          <td><button type="button" onClick={() => EditRow(a)}>Edytuj mnie</button></td>
      </tr>)}
      <tr><td>Suma wypłat: </td><td colSpan="6">{sumSalary} zł</td></tr>
      <tr><td>Suma skilli: </td><td colSpan="6"><ul>{
        Object.entries(sumSkill).map((skill) =>
        
          <li>{skill[0]}: {skill[1]}</li>

        )
      }</ul></td></tr>
      <tr><td colSpan="7"><button type="button" onClick={() => DeleteAll(usersArr,setUsersArr)}>Usun calosc byqu</button></td></tr>
     </>
    )
  })

  export default Row;