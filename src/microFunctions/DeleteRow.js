function DeleteRow(usersArr, setUsersArr, index) {
    const tempArr = [...usersArr];
    tempArr.splice(index,1);
    setUsersArr(tempArr);

}
export default DeleteRow;