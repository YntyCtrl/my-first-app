const { useState } = require("react")

function Text(){

    const [text,setText] = useState("")

    return (
        <div className="Switch">
            <input type="text" id="first" onInput={(event) => setText(event.target.value.trim())}>Inc</input>
            <input type="text" id="last" onInput={(event) => setText(event.target.value.trim())}>Inc</input>
        </div>
    )
}

export default Text;