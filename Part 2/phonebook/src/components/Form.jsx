export default function Form({
  newName,
  newNumber,
  hanldeOnChange,
  handleNumberChange,
  handleClick,
}) {
  return (
    <div>
      <h2>Add a new</h2>
      <form>
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
