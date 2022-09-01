const Kasuj = ((index,usersArr,setUsersArr,skill=undefined) =>{
    const tempArr = [...usersArr];
    tempArr.splice(index,1);
    setUsersArr(tempArr);
    console.log(index);
  
  })
export default Kasuj;  