import { useState, useEffect } from "react"
import TableRow from "./TableRow"





const TableBody = () => {
    const [flights, setFlights] = useState(null)
    const getFlights = () => {
        fetch("https://flights-widget.netlify.app/flights")
            .then(response => response.json())
            .then(flights => setFlights(Object.values(flights.data)))
            .catch(err => console.error(err))

    }

    useEffect(() => getFlights(), [])
    return (
        <tbody>
            {flights?.map((flight, _index) => (
                <TableRow key={_index} flight={flight} />
            ))}

        </tbody>

    )


}

export default TableBody