const { useState } = require("react")

function Name(){

    const [name,setName] = useState("")

    return (
        <div className="Switch">
            <h1>Your name is: {name}</h1>
            <input type="text" onInput={(event) => setName(event.target.value.trim())}/>
        </div>
    )
}

export default Name;