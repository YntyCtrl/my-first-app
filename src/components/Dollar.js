const { useState } = require("react")

function Dollar({ value  }){

    
    const [dollar, setDollar] = useState(value ?? 0 );


    // for (let i = 0; i <massive.length; i++) {
    //     list.push(<li>{massive[i]}</li>)
    // }
    
    

    return <div className="example-5">
            
            {/* <h1>{list}</h1> */}
            $<input type="number" onInput={(event) => setDollar(event.target.value * 85)}/>
            <div>={dollar}som</div>

    </div>
    
}
 
export default Dollar;