import StatisticLine from "./StatisticLine";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positives,
  average,
}) {
  return (
    <div>
      <h1>statistics</h1>
      {total === 0 ? (
        "No feedback given"
      ) : (
        <table>
         <tr> <StatisticLine value={good} text="good" /></tr>
         <tr><StatisticLine value={neutral} text="neutral" /></tr>
         <tr><StatisticLine value={bad} text="bad" /></tr>
         <tr><StatisticLine value={total} text="all" /></tr>
         <tr><StatisticLine value={average} text="average" /></tr>
         <tr><StatisticLine value={positives + " %"} text="positives" /></tr>
        </table>
      )}
    </div>
  );
}
