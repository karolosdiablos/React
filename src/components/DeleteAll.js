
function DelFun (setUsersArr) {
    if (window.confirm("Na pewno chcesz usunąć tabelę?")) {
        setUsersArr([]);
      }
}

const DeleteAll = (({setUsersArr}) =>{

    return (
        <td>
            <button type="button" onClick={DelFun(setUsersArr)}>Wywal całość</button>
        </td>
    )

})


export default DeleteAll;