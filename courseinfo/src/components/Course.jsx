import Part from './Part'

const Course = ({ course }) => {
    const sum = course.parts.reduce((acc, part) => {
        return acc + part.exercises;
    }, 0)
    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map(part => <Part key={part.id} part={part} />)}
            <p>Number of exercises: {sum}</p>
        </div>
    )
}

export default Course