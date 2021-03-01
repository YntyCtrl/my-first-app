const List = (props) => {
    let list = [];
    for (let i = 0; i < props.items.length; i++) {
        list.push(<li>{props.items[i]}</li>)
    }


    return (<ul type="square">
        {list}
    </ul>)
};

export default List;