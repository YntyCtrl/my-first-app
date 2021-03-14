

const Example = ({ items }) => {
    let list = items.map(item => {
        for (let i = 0; i < items.length; i++) {
            return <li>{item[i]}</li>
        }

        
    })
    return <ol>{list}</ol>
}

export default Example;