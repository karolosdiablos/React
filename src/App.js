import { useEffect, useState} from 'react';
import './App.css';
import Row from './components/Row';
import Header from './components/Header';
import AddNewUser from './components/AddNewUser';

const users = [
  {
      name: 'Bartosz',
      surname: 'Władyka',
      skills: {
          php: 4,
          js: 6,
      },
      salary: 2800,
  },
  {
      name: 'Patryk',
      surname: 'Kubicki',
      skills: {
          php: 8,
          js: 2,
      },
      salary: 2300,
  },
  {
      name: 'Jędrzej',
      surname: 'Burczak',
      skills: {
          php: 3,
          js: 7,
      },
      salary: 1000,
  },
  {
      name: 'Karol',
      surname: 'Jezierski',
      skills: {
          php: 2,
          js: 8,
      },
      salary: 2500,
  },
  {
      name: 'Piotr',
      surname: 'Kozera',
      skills: {
          php: 6,
          js: 6,
      },
      salary: 2100,
  },
  {
      name: 'Grzegorz',
      surname: 'Szukalski',
      skills: {
          php: 10,
          system: 10,
          js: 2,
      },
      salary: 25000,
  },
  {
      name: 'Piotr',
      surname: 'Piska',
      skills: {
          php: 2,
          js: 1,
          ts: 1,
      },
      salary: 15000,
  },
];

users.map((a,index) => {
  a.index=index;
});




const EditRow = (({a}) => {


})


const DeleteAll = ((usersArr,setUsersArr) => {
  if (window.confirm("Na pewno chcesz usunąć tabelę?")) {
    console.log(usersArr)
    setUsersArr(usersArr=[]);
  }})

function DeleteRow(usersArr, setUsersArr, index) {
    const tempArr = [...usersArr];
    tempArr.splice(index,1);
    setUsersArr(tempArr);

}


function App() {

  const [usersArr,setUsersArr] = useState(users);
  const [sortType,setSortType] = useState('default');

  
  useEffect(() => {
    const tmp = [...usersArr];
    if (sortType != "default") {
        if (sortType == 'asc') {
          tmp.sort((a,b) => a.salary - b.salary);
        } else if (sortType == 'dsc') {
          tmp.sort((a,b) => b.salary - a.salary);
        }
      } else if(sortType == "default") {
        tmp.sort((a,b) => a.index - b.index);
      }
      setUsersArr(tmp);
        
  },[sortType])
  
  return (
    <div className="App">
      
      <header className="App-header">
      <AddNewUser usersArr={usersArr} setUsersArr={setUsersArr}/>
        <table>
        <Header/>
        <tbody>
          <tr><td colSpan="7">
          <select onChange={(e) => {setSortType(e.target.value)}}>
              <option value="default">Bez sortowania</option>
              <option value="asc" >Rosnąco</option>
              <option value="dsc">Malejąco</option> 
          </select>

          </td></tr>

        <Row usersArr={usersArr} setUsersArr={setUsersArr} DeleteRow={DeleteRow} DeleteAll={DeleteAll} EditRow={EditRow}/>
        </tbody>
        </table>
      </header>
    </div>
  )
}

export default App;