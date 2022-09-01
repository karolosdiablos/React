import Header from "./Header";
import Tbody from "./Tbody";

const Table =(({usersArr, setUsersArr}) =>{
    return (
      <table>
        <Header/>
        <Tbody usersArr={usersArr} setUsersArr={setUsersArr}/>
      </table>
    )
  }) 

  export default Table;