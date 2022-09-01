import logo from './logo.svg';
import { useEffect, useState} from 'react';
import './App.css';
import { computeHeadingLevel } from '@testing-library/react';

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

let lastIndex = users[users.length-1].index+1;


function Headers() {

  return (
    <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Wynagrodzenie</th>
            <th>Skills</th>
            <th>Skasuj</th>
          </tr>
    </thead>
  )
}

function Rows ({flagSkill,setFlagSkill}) {
  const [index, setIndex] = useState(0);
  const [usersArr, setUsersArr] = useState(users);
  const [salary, setSalary] = useState(0);
  const [sumSkill, setSumSkill] = useState({});
  const [recalcSkill, setRecalcSkill] = useState(1);
  setFlagSkill(0);
  

  

 let type="default";
  useEffect(()=>{
    let tmpSal=0;
   
    usersArr.map((item) => {
      tmpSal+=parseInt(item.salary);
      setSalary(tmpSal);
      setFlagSkill(0);
      
      })
  },[usersArr])

  /*
Object.entries(item.skills).map((skill) =>  {
        if (lenArr<usersArr.length-1 && koniec!=1) {
        if (sumSkill.hasOwnProperty(skill[0])) {
          setSumSkill(sumSkill[skill[0]] += parseInt(skill[1]))
        } else {
          setSumSkill(sumSkill[skill[0]] = parseInt(skill[1]))
        } 
        lenArr+=1
      } else {
        koniec=1;
        console.log("koniec")
      }
  })

  

  */
  {SumSkill (sumSkill, setSumSkill, usersArr,setFlagSkill,recalcSkill,setRecalcSkill)}
  return (
    <tbody>

      <tr>
        <td colSpan="2"></td>
        <td>
        Sortowanie: 
          <select onChange={(e) => {SortArr(type=e.target.value, usersArr,setUsersArr,setFlagSkill)}}>
            <option value="default">Bez sortowania</option>
            <option value="asc" >Rosnąco</option>
            <option value="dsc">Malejąco</option>
          </select>
        </td>
        <td colSpan="2"></td>
      </tr>
        {usersArr.map((a, index) => 
          <tr key={`${a.name}_${a.surname}`}>
            <td>{a.name}</td>
            <td>{a.surname}</td>
            <td>{a.salary} zł</td>
            <td>
              <ul>
                {Object.entries(a.skills).map((skill) =>
                <li>
                  {skill[0]}: {skill[1]}
                  <button name={skill[0]} value={skill[1]}key={`${index}_${skill}_del`} onClick={(e) => {
                    console.log(a.skills)
                    delete a.skills[e.target.name]
                    setRecalcSkill(1);
                    
                    //a['salary'] = 3
                    //console.log(usersArr)
                    //setUsersArr();
                    }}>Kasuj</button>
                </li>
                )}
                
              </ul>
            </td>
            <td>
              <button key={`${a.name}_del`} onClick={() => {DeleteRow(usersArr, setUsersArr, index)}}>Skasuj mnie!</button>
              <button key={`${a.name}_edit`} onClick={() => {EditRow(usersArr,setUsersArr, index)}}>Edytuj mnie!</button>
            </td>
          </tr>
        )}
        
        <tr key="sumSalary">
          <td>Łączna wypłata: </td>
          <td colSpan="5">
          {salary} zł
          </td>
        </tr>
        <tr key="sumSkills">
          <td>Skillsy:</td>
          <td colSpan="5">
            <ul>
            {Object.entries(sumSkill).map((skill) => 
              <li>
                {skill[0]}: {skill[1]}
                
            </li>
            )}
            </ul>
          </td>
        </tr>
        <tr key="atomButton">
          <td colSpan="6">
            <button key={`delTable`} onClick={() => {DeleteAll(setUsersArr,setSalary)}}>Usuń</button>
          </td>
        </tr>
        
        <tr key={`Dodaj usera`}>
          {Form(usersArr,setUsersArr,flagSkill,setFlagSkill)}
          
        </tr>
      </tbody>
     
  )
}
let inn=0;

function SumSkill (sumSkill, setSumSkill, usersArr,setFlagSkill) {
  console.log(inn);
  let tmp = sumSkill;
  usersArr.map((a, index) =>{
    if(inn<lastIndex){
    for (const skill in a.skills) {
      if(sumSkill.hasOwnProperty(skill)) {

        tmp[skill]++;
        setSumSkill(tmp);
        console.log(sumSkill)
      } else if (!sumSkill.hasOwnProperty(skill)) {
    
        tmp[skill] = 1;
        setSumSkill(tmp); 
        
      }

      console.log(sumSkill)
    }
  }inn++;
  setFlagSkill(1);
  })
}

//{setSalary((old) => old+=parseInt(a.salary))}

//<input type="text" value={value} onChange={(event) => setValue(event.target.value)} />

/*

const ex1 = users.slice();
const bestOfJs = ex1.sort((a, b) => a.skills.js - b.skills.js);
bestOfJs.reverse();
const best3 = bestOfJs.splice(0, 3)
*/

/*
function SumSkills () {
  {Object.entries(item.skills).map((skill) =>  {
            if (sumSkill.hasOwnProperty(skill[0])) {
              setSumSkill(sumSkill[[skill[0]]] += parseInt(skill[1]))
            } else if (!sumSkill.hasOwnProperty(skill[0])){
              setSumSkill(sumSkill[[skill[0]]] = parseInt(skill[1]))
            } 
            
          
  })}
}


*/


function SortArr (type, usersArr,setUsersArr,setFlagSkill) {
  const tmp = usersArr;
  console.log(usersArr);
  if (type != "default") {
      tmp.sort((a,b) => a.salary - b.salary);

    } else if(type == "default") {
      tmp.sort((a,b) => a.index - b.index);
    }
    
    if (type == "dsc") {
        tmp.reverse();
      }
      console.log(tmp);
      setUsersArr(tmp);
      setFlagSkill(1);


    } 



function DeleteRow(usersArr, setUsersArr, index, skill=undefined) {

  

  if (skill===undefined) {
    const tempArr = [...usersArr];
    tempArr.splice(index,1);
    setUsersArr(tempArr);
  } else if(skill!=undefined) {
    const tempArr = [...usersArr]
    setUsersArr(tempArr);
  }


}


function AddSkill (allSkills,setAllSkills,newSkill,setNewSkill,newSkillValue,setNewSkillValue,setFlagSkill) {

  console.log(typeof(newSkill))

  if (typeof newSkillValue === 'string' && typeof newSkill === 'string' && newSkill !== '') {
  let tmpSkill = allSkills;
  setFlagSkill(1);
  tmpSkill[newSkill] = parseInt(newSkillValue);
  // console.log(skill);
  // allSkills[newSkill] = newSkillValue;
  setAllSkills(tmpSkill);
  console.log(allSkills)  
  setNewSkill("");
  setNewSkillValue("");
  } else if (typeof newSkill !== 'string' || newSkill == '') {
    window.alert("Nazwa skilla nie moze byc pusta")
  } else if (typeof newSkillValue !== 'string') {
    window.alert("Wartość skilla nie moze byc pusta")
  }
}

function EditRow(usersArr, setUsersArr, index) {
  console.log('fs');
  return (
    <tr>
      <td>input</td>
      <td>input</td>
      <td>input</td>
      <td>input</td>
      <td>input</td>
    </tr>
  )

}

function AddRow (usersArr,setUsersArr,allValues,setAllValues,allSkills,flagSkill,setFlagSkill) {

  if (!allValues['name']) {
    window.alert("Imie nie moze byc puste")
  } else if (!allValues['surname']) {
    window.alert("Nazwisko nie moze byc puste")
  } else if (!allValues['salary']) {
    window.alert("Wynagrodzenie nie moze byc puste")
  } else if (flagSkill==1) {
    window.alert("Skille nie moga byc puste")
  } else {
    allValues.index=lastIndex;
    lastIndex++;
    let tmpArr = allValues;
    tmpArr["skills"]=allSkills;
    setAllValues(tmpArr);
    setUsersArr([...usersArr, allValues]);
    console.log(allValues)
    flagSkill = 0;
    SortArr(usersArr);
  }
}

function DeleteAll (setUsersArr,setSalary) {
  if (window.confirm("Na pewno chcesz usunąć tabelę?")) {
    setUsersArr([]);
    setSalary(0);
  }
  
}

//  <User key={name} name={name} onRemove={() => setUsers((usersList) => usersList.filter((item) => item.name!==name))}



function Form (usersArr,setUsersArr,flagSkill,setFlagSkill) {
  
  const [allValues, setAllValues] = useState({
    name: '',
    surname: '',
    salary: '',
  });
  const [allSkills, setAllSkills] = useState({});
  const [newSkill, setNewSkill] = useState([]);
  const [newSkillValue, setNewSkillValue] = useState([]);

  const changeHandler = e => {

    if (e.target.name !== "skillName" && e.target.name !=="skillValue"){
    setAllValues({...allValues, [e.target.name]: e.target.value})
    } 
      
  }
  return (
    <>
      <label>Imię: <br/><input type='text' name="name" onChange={(changeHandler)}/><br/></label>
          <label>Nazwisko: <br/><input type='text' name="surname" onChange={changeHandler} /><br/></label>
          <label>Wynagrodzenie: <br/><input type='number' name="salary" onChange={changeHandler} /><br/></label>
          <table>
          <label>Skill: <input type='text' name="skillName" value={newSkill} onChange={(event) => {setNewSkill(event.target.value);console.log(newSkill)}}/></label>
          
          <label>Wartość: <input type='number' name="skillValue" value={newSkillValue} onChange={(event) => {setNewSkillValue(event.target.value)}}/><br/></label>
          <ul>
            {Object.entries(allSkills).map((a) => 
              <li>{a[0]}: {a[1]}</li>
            )}
          </ul>
          <button onClick={() => {AddSkill(allSkills,setAllSkills,newSkill,setNewSkill,newSkillValue,setNewSkillValue,setFlagSkill)}} >Add</button> 
          </table> 
          <button onClick={() => {AddRow(usersArr,setUsersArr,allValues,setAllValues,allSkills,flagSkill,setFlagSkill)}} >Dodaj mnie mordo!</button>  
    </>
  )
}

function onToDoChange(value) {
  this.setnewUser({
    name: value
  });
}




function App() {
  const [flagSkill,setFlagSkill] = useState(0);
  //const [data, setData] = useState(users);
  return (
    <div className="App">
      <header className="App-header">
      <table>
        <Headers />
        <Rows flagSkill={flagSkill} setFlagSkill={setFlagSkill}/>
      </table>
    
      </header>
    </div>
  )
}

export default App;

// Task 1
// Wyświetl listę userów w tabeli
// Lista powinna pokazywać:
// Imię, nazwisko, wynagordzenie, umiejętności wypisane w formie listy punktowanej


// Task 2
// Dodaj mozliwość dodawania nowych userów do tabeli
// Wykonaj formularz, który:
// Będzie zbierał informacje - imie, nazwisko, wynagrodzenie, skillsy
// Skillsy muszą posiadać mozliwość podania nazwy skilla i jego wartości
// Po kliknięciu w przycisk wysyłania danych lista powinna się zaktualizować o nowy rekord

// Task 3
// Dodaj mozliwość usuwania rekordów z listy userów
// Opcjonalnie: Dobrze by było gdyby user musiał potwierdzić usunięcie rekordu

//------NOWE-------

 // Task 4
// Przy uycia hooka useEffect przygotuj mechanizm sumowania wypłat, skillów (ile mamy userów np. znających php, ile js etc.)
// Wyświetl ponizej tabeli podsumowanie obliczen

// Task 5
// Dodaj mechanizm edycji istniejącego rekordu

// Task 6
// Dodaj przycisk do czyszczenia całej listy
// Must have - alert

// Task 7
// Dodaj mozliwosc sortowania tablicy po wypłacie rosnąco / malejąco / wyłaczenie