const { useState } = require("react")

function Fontsize({ value  }){

    
    const [num, setNum] = useState(16);


    
    

    return <div className="example-5">
            
            <span style={{fontSize:num + "px"}}>Example</span>
            <input type="number" onInput={(event) => setNum(event.target.value)}/>
            

    </div>
    
}
 
export default Fontsize;