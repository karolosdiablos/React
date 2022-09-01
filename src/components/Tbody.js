import Row from "./Row";
import Sort from "./Sort";
import SumSalary from "./SumSalary";
import DeleteAll from "./DeleteAll";
import { useEffect, useState} from 'react';

function DeleteFun(setUsersArr) {
    if (window.confirm("Na pewno chcesz usunąć tabelę?")) {
        setUsersArr([]);
      }
}

const Tbody = (({usersArr, setUsersArr}) => {


    const [sumSalary,setSumSalary] = useState(0);
    const [sumSkills,setSumSkills] = useState({});
    const [sortType,setSortType] = useState('default');
    let type='default';
  
    return (
      <tbody>
          <select onChange={(e) => {setSortType(e.target.value)}}>
              <option value="default">Bez sortowania</option>
              <option value="asc" >Rosnąco</option>
              <option value="dsc">Malejąco</option>
          </select>
          <td>
            <button type="button" onClick={setUsersArr([])}>Kasuj</button>
          </td>
          <Sort type={sortType} usersArr={usersArr} setUsersArr={setUsersArr}/>
           <Row usersArr={usersArr} setUsersArr={setUsersArr}></Row>

           
      </tbody>
    )
  })

  export default Tbody;