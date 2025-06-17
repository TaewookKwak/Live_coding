import React from "react"
import useDebounce from "./useDebounce"

interface DebounceProps<T> {
    value: T;
    delay: number;
}

const App : React.FC = () => {
    const [count, setCount] = React.useState<number>(0)
    
    const debounceValue = useDebounce<number>(count, 500)

    function handleChangeCount(value : number){
        setCount(prev => prev + value)
    }

    return (
        <div>
            <h1>디바운스 카운터</h1>
            <button onClick={() => handleChangeCount(1)}>+</button>
            <button onClick={() => handleChangeCount(-1)}>-</button>
        </div>
    )
}

export default App;