const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.name} {props.exercises}</p>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
    {parts.map((item, index) => <Part key={index} name={item.name} exercises={item.exercises} />)}
    </>
  )
}

const Total = ({parts}) => {
  let sum = 0;
  for (const part of parts) {
    sum += part.exercises;
  }
  return (
    <>
    <p>Number of exercises {sum}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )

}

export default App
