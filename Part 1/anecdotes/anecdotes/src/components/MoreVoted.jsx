export default function MoreVoted({anecdote, vote}){
    return(
        <>
            <h1>Anecdote with most votes</h1>
            <p>{anecdote}</p>
            <p>has {vote}</p>
        </>
    )
}