

function Table(datas){
  <table>
  <thead>
    <tr>
      <th>Imię</th>
      <th>Nazwisko</th>
      <th>Wynagrodzenie</th>
      <th>Skills</th>
    </tr>
  </thead>
<tbody>
  {users.map((a) => 
    <tr key={`${a.name}_${a.surname}`}>
      <td>{a.name}</td>
      <td>{a.surname}</td>
      <td>{a.salary}</td>
      <td>
        <ul key={`${a.name}_${a.surname}_skillsy`}>
          {Object.keys(a.skills).map((skill) =>
          <li>
            {skill}
          </li>
          )}
        </ul>
      </td>
    </tr>
  )}
</tbody>

</table>
}