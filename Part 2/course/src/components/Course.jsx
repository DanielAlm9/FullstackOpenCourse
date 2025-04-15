import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

export default function Course({ courses }) {
  

  return (
    <div>
      {courses.map((course) => (
        <>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </>
      ))}
    </div>
  );
}
