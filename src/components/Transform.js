const { useState } = require("react")

function Transform({value }){

    
    const [degree, setDegree] = useState(0);
    


    // for (let i = 0; i <massive.length; i++) {
    //     list.push(<li>{massive[i]}</li>)
    // }
    
    

    return <div className="example-5">
             <div style={{backgroundColor:'red', height: "50px", width:"50px", transform: `rotate(${degree}deg)`}}></div>
            <input type="range" max="360"  onInput={(event) => setDegree(event.target.value)}/>
            
            

    </div>
    
}
 
export default Transform;