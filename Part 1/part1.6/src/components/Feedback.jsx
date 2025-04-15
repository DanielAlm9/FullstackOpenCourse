import Button from "./Button";

export default function Feedback({ handleGoodClick, handleNeutraClick  , handleBadClick }) {
  return (
    <div>
      <h1>give Feedback</h1>
      <Button feedback="good" onClick={handleGoodClick} />
      <Button feedback="neutral" onClick={handleNeutraClick} />
      <Button feedback="bad" onClick={handleBadClick} />
    </div>
  );
}
