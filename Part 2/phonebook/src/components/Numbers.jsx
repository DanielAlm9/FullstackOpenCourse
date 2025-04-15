export default function Numbers({filterPersons}) {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {filterPersons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
