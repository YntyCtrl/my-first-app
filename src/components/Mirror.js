const { useState } = require("react")

function Mirror(){

    
    const [text, setText] = useState("Yntymak");


    

    return <div className="example-5">
             
            <input type="text" onInput={(event) => setText(event.target.value)}/>:
            <span><bdo dir="rtl">{text}</bdo></span>
            

    </div>
    
}

export default Mirror;