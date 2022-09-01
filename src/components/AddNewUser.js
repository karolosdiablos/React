import { useEffect, useState } from "react";
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
      <table>
        <label>Imię: <br/><input type='text' name="name" value={allValues.name} onChange={(changeHandler)}/><br/></label>
            <label>Nazwisko: <br/><input type='text' name="surname" onChange={changeHandler} /><br/></label>
            <label>Wynagrodzenie: <br/><input type='number' name="salary" onChange={changeHandler} /><br/></label>
            <table>
            <label>Skill: <input type='text' name="skillName" value={newSkill} onChange={(event) => {setNewSkill(event.target.value)}}/></label>
            
            <label>Wartość: <input type='number' name="skillValue" value={newSkillValue} onChange={(event) => {setNewSkillValue(event.target.value)}}/><br/></label>
            <ul>
              {Object.entries(allSkills).map((a) => 
                <li key={`${a[0]}_${a[1]}`}>{a[0]}: {a[1]}</li>
              )}
            </ul>
            <button onClick={() => {AddSkill(allSkills,setAllSkills,newSkill,setNewSkill,newSkillValue,setNewSkillValue,setFlagSkill)}} >Add</button> 
            </table> 
            <button onClick={() => {AddRow(usersArr,setUsersArr,allValues,setAllValues,allSkills,flagSkill,setFlagSkill)}} >Dodaj mnie mordo!</button>  
            <br/>
        </table>
    )
})

export default AddNewUser;