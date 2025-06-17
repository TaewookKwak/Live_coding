import React from "react";

interface DebounceProps<T> {
    value: T;
    delay: number;
}

function useDebounce<T> (value : T, delay : number): T {
    const [debounce, setDebounce] = React.useState<T>(value);

    React.useEffect(() => { 
        const handler = setTimeout(() => {
            setDebounce(value)
        }, delay)
    }, [value, delay])

    return debounce;
}

export default useDebounce;