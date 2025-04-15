export default function Button({feedback, onClick}){
    return <button onClick={onClick}>{feedback}</button>
}