import {useState } from "react";
import AddRow from "./AddRow";
import AddSkill from "./AddSkill";

const AddNewUser =  (({usersArr,setUsersArr}) => { 
  
    const [allValues, setAllValues] = useState({
      name: '',
      surname: '',
      salary: '',
    });
    const [allSkills, setAllSkills] = useState({});
    const [newSkill, setNewSkill] = useState([]);
    const [newSkillValue, setNewSkillValue] = useState([]);
    const [flagSkill,setFlagSkill] = useState({});
  

    const changeHandler = e => {
  
      if (e.target.name !== "skillName" && e.target.name !=="skillValue"){
      setAllValues({...allValues, [e.target.name]: e.target.value})
      } 


        
    }
    return (
        <>
            Imię: <br/><input type='text' name="name" value={allValues.name} onChange={(changeHandler)}/><br/>
            Nazwisko: <br/><input type='text' name="surname" value={allValues.surname} onChange={changeHandler} /><br/>
            Wynagrodzenie: <br/><input type='number' name="salary" value={allValues.salary} onChange={changeHandler} /><br/>
                <table>
                    <tbody>
                <tr><td>Skill: <input type='text' name="skillName" value={newSkill} onChange={(event) => {setNewSkill(event.target.value)}}/></td>
                
                <td>Wartość: <input type='number' name="skillValue" value={newSkillValue} onChange={(event) => {setNewSkillValue(event.target.value)}}/><br/></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <ul>
                        {Object.entries(allSkills).map((a) => 
                            <li key={`${a[0]}_${a[1]}`}>{a[0]}: {a[1]}</li>
                        )}
                        </ul>
                    </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button onClick={() => {AddSkill(allSkills,setAllSkills,newSkill,setNewSkill,newSkillValue,setNewSkillValue,setFlagSkill)}} >Add</button> 
                        </td>
                    </tr>
                </tbody>
                </table> 
                <button onClick={() => {AddRow(usersArr,setUsersArr,allValues,setAllValues,allSkills,setAllSkills,flagSkill,setFlagSkill)}} >Dodaj mnie mordo!</button>  
                <br/>
                </>
    )
})

export default AddNewUser;