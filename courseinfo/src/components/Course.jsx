import Part from './Part'

const Course = ({ course }) => {
    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
}

export default Course