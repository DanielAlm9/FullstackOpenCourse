import { useState } from "react";
import MoreVoted from "./components/MoreVoted";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState([1, 2, 3, 4, 1, 2, 3, 4]);

  const handleClick = () => {
    setSelected(selected + 1);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const maxVotes = Math.max(...votes);
  const mostVoted = votes.indexOf(maxVotes);

  return (
    <div>
      {anecdotes[selected] === undefined ? (
        "No more anecdotes"
      ) : (
        <>
          {anecdotes[selected]}
          <p>has {votes[selected]} votes</p>
          <button onClick={handleClick}>next anecdote</button>
          <button onClick={handleVote}>vote</button>
          <MoreVoted anecdote={anecdotes[mostVoted]} vote={votes[mostVoted]} />
        </>
      )}
    </div>
  );
};

export default App;
