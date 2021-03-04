const { useState } = require("react")

function InputLength({val}){

    
    const [text, setText] = useState(val ?? "");


    // for (let i = 0; i <massive.length; i++) {
    //     list.push(<li>{massive[i]}</li>)
    // }
    
    

    return <div className="example-5">
            <ul>{text.length}</ul>
            {/* <h1>{list}</h1> */}
            <input type="text" onInput={(event) => setText(event.target.value)}/>
            
            

    </div>
    
}

export default InputLength;