const DeleteAll = ((usersArr,setUsersArr) => {
    if (window.confirm("Na pewno chcesz usunąć tabelę?")) {
      console.log(usersArr)
      setUsersArr(usersArr=[]);
    }})

    export default DeleteAll;