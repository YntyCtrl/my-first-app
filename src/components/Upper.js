const Upper = ({ items }) => {
    let list = items.map(item => {
    return <li>{ item.name.toUpperCase()}</li>
    })
return <ul>{list}</ul>;
}

export default Upper;