import Part from "./Part";

export default function Content({ parts }) {
  return (
    <ul>
      {parts.map((part) => (
        <li>
          <Part part={part.name} ex={part.exercises} />
        </li>
      ))}
    </ul>
  );
}
