export default function Form({
  filter,
  hanldeFilter,
  newName,
  newNumber,
  hanldeOnChange,
  handleNumberChange,
  handleClick,
}) {
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter: <input value={filter} onChange={hanldeFilter} />
        </div>
        <h2>add a new</h2>

        <div>
          name: <input value={newName} onChange={hanldeOnChange} />
        </div>
        <div>
          numbers: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="button" onClick={handleClick}>
            
            add
          </button>
        </div>
      </form>
    </div>
  );
}
