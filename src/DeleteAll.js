const DeleteAll = (({setUsersArr}) =>{

    if (window.confirm("Na pewno chcesz usunąć tabelę?")) {
        setUsersArr([]);
      }

})


export default DeleteAll;