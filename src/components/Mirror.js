const { useState } = require("react")

function Mirror(){

    
    const [text, setText] = useState("Yntymak");


    // for (let i = 0; i <massive.length; i++) {
    //     list.push(<li>{massive[i]}</li>)
    // }
    
    

    return <div className="example-5">
             
            <input type="text" onInput={(event) => setText(event.target.value)}/>:
            
            

    </div>
    
}

export default Mirror;