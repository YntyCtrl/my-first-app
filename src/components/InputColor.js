const { useState } = require("react")

function InputColor({value}){

    
    const [list, setList] = useState(value ?? "#000000");


    // for (let i = 0; i <massive.length; i++) {
    //     list.push(<li>{massive[i]}</li>)
    // }
    
    

    return <div className="example-5">
            <ul>{list}</ul>
            {/* <h1>{list}</h1> */}
            <input type="color" onInput={(event) => setList(event.target.value.trim())}/>
            

    </div>
    
}
 
export default InputColor;