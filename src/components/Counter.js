const { useState } = require("react")

function Counter(){

    const [number,setNumber] = useState(0)

    return (
        <div className="Switch">
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Inc</button>
            <button onClick={() => setNumber(number - 1)}>Dec</button>
        </div>
    )
}

export default Counter;