import React, {useState, useEffect} from 'react'

function App() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        setList([...list, 'hi'])
    }, [])

    const handleText = e => {
        setText(e.target.value)
    }

    const addItem = e => {
        e.preventDefault()
        console.log('New item: ', text)
        setList([...list, text])
        setText('')
    }

    const clicked = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={clicked}>Click me!</button>
            <p>Add item to the list -> Form</p>
            <form onSubmit={addItem}>
                <label htmlFor="inputText">Texto:</label>
                <input type="text" name="inputText" id="inputText" value={text} onChange={handleText} />
                <button type="submit">Add :D</button>
            </form>
            <p>Items list:</p>
            <ol>
                {/*showList*/}
                {list.map(item => <li key={item}>{item}</li>)}
            </ol>
        </div>
    )
}

export default App
