function BigSmall(props){
    let c = ">"
    if(props.a < props.b){
        c = "<"
    }
    if(props.a > props.b){
        c = ">"
    }
    
return<div>{props.a} {c} {props.b}</div>
}

export default BigSmall;