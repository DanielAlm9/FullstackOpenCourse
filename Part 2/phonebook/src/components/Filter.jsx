export default function Filter({ filter, hanldeFilter }) {
  return (
    <div>
      filter: <input value={filter} onChange={hanldeFilter} />
    </div>
  );
}
