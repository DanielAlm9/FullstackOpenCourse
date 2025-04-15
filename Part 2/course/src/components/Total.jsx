export default function Total({ parts }) {
    console.log(parts);
    
    const total = parts.reduce((acc, part) => acc + part.exercises, 0);
  
    return (
      <p>
        Number of exercises: {total}
      </p>
    );
  }