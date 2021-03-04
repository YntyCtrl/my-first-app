const { useState } = require("react")

function ColorSlider({value }){

    
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);


    // for (let i = 0; i <massive.length; i++) {
    //     list.push(<li>{massive[i]}</li>)
    // }
    
    

    return <div className="example-5">
             <div style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>Yntymak</div>
            <input type="range" max="255"  onInput={(event) => setRed(event.target.value)}/>
            <input type="range" max="255"  onInput={(event) => setGreen(event.target.value)}/>
            <input type="range" max="255"  onInput={(event) => setBlue(event.target.value)}/>
            

    </div>
    
}
 
export default ColorSlider;