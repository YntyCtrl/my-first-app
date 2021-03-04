const { useState } = require("react")

function Color({ value  }){

    
    const [color, setColor] = useState(16);


    
    

    return <div className="example-5">
            
            <span style={{color:color}}>Example</span>
            <input type="color" onInput={(event) => setColor(event.target.value)}/>
            

    </div>
    
}
 
export default Color;