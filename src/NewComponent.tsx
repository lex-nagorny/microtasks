type NewComponentPropsType = {
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}


export const NewComponent = (props: NewComponentPropsType) => {


    return (
        <ul>
            <div>{props.students.map((objectFromStudentArray) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span>{objectFromStudentArray.age}</span>
                    </li>
                )
            })}
            </div>
        </ul>
    )
}