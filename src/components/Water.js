function Water(props){
    let state = "Ice"
    if (props.frozen){
        state = "Water";

    }
return <div>{state}</div>
}

export default Water;