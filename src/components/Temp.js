const { useState } = require("react")

function Temp({ value  }){

    
    const [selsius, setSelsius] = useState(value ?? 0 );


    
    

    return <div className="example-5">
            
            
            C<input type="number" onInput={(event) => setSelsius(event.target.value * 33.8)}/>
            <span>={selsius}F</span>

    </div>
    
}
 
export default Temp;