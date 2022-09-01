const AddSkill = ((allSkills,setAllSkills,newSkill,setNewSkill,newSkillValue,setNewSkillValue,setFlagSkill) => {
    console.log(typeof newSkill)
    if (typeof newSkillValue === 'string' && typeof newSkill === 'string' && newSkill !== '') {
        let tmpSkill = allSkills;
        setFlagSkill(1);
        tmpSkill[newSkill] = parseInt(newSkillValue);
        // console.log(skill);
        // allSkills[newSkill] = newSkillValue;
        setAllSkills(tmpSkill);
        console.log("asfsaf "+typeof newSkill)  
        setNewSkill("");
        setNewSkillValue("");
        } else if (typeof newSkill !== 'string' || newSkill == '') {
          window.alert(typeof newSkill)
        } else if (typeof newSkillValue !== 'string') {
          window.alert("Wartość skilla nie moze byc pusta")
        }
})
export default AddSkill;
