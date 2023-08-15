
type ComputersType = {
    id: number
    name: string
    place: string
}

type TopComputersPropsType= {
    comps: ComputersType[]
}

export const TopComputers = (props: TopComputersPropsType) => {
    return(
        <ul>
            <div>{props.comps.map((car, index) => {
                return (
                    <li key={index}>
                        <span>{car.name}</span>
                        <span>{car.place}</span>
                    </li>
                )
            })}
            </div>

        </ul>
    )
}