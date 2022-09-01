const Sort = (({type,usersArr, setUsersArr}) => {

    const tmp = usersArr;
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
        
  })

  export default Sort;