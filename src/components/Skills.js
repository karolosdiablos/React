const Skills = (({skills, index}) =>{
    return (
      <ul>
        {Object.entries(skills).map(skill =>
          <li>
            {skill[0]}: {skill[1]}
          </li>
        )}
      </ul>
    )
  })

  export default Skills;