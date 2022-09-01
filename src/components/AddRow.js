const AddRow = ((usersArr,setUsersArr,allValues,setAllValues,allSkills,flagSkill) => {
    if (!allValues['name']) {
        window.alert("Imie nie moze byc puste")
      } else if (!allValues['surname']) {
        window.alert("Nazwisko nie moze byc puste")
      } else if (!allValues['salary']) {
        window.alert("Wynagrodzenie nie moze byc puste")
      } else if (flagSkill==0) {
        window.alert("Skille nie moga byc puste")
      } else {
        let lastIndex = usersArr[usersArr.length-1].index+1;
        allValues.index=lastIndex;
        lastIndex++;
        let tmpArr = allValues;
        tmpArr["skills"]=allSkills;
        setAllValues(tmpArr);
        setUsersArr([...usersArr, allValues]);
      }
})

export default AddRow;