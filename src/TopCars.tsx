
type CarType = {
    manufacturer: string
    model: string
}
type TopCarsPropsType = {
    cars: CarType[]
}

export const TopCars = (props:TopCarsPropsType)=> {
    return (
    <ul>
        <div>{props.cars.map((car, index) => {
            return (
                <li key={index}>
                    <span>{car.manufacturer}</span>
                    <span>{car.model}</span>
                </li>
            )
        })}
        </div>
    </ul>)
}
