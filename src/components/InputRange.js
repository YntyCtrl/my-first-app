const { useState } = require("react")

function InputRange({min, max, value  }){

    
    const [range, setRange] = useState(value ?? 0 );


    // for (let i = 0; i <massive.length; i++) {
    //     list.push(<li>{massive[i]}</li>)
    // }
    
    

    return <div className="example-5">
            <ul>{range}</ul>
            {/* <h1>{list}</h1> */}
            <input type="range" max={max} min={min} onInput={(event) => setRange(event.target.value)}/>
            

    </div>
    
}
 
export default InputRange;