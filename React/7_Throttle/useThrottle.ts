import { useEffect, useRef, useState, useCallback } from "react";

const useThrottle = <T,>(value: T, delay: number) => {
    const lastTime = useRef<number>(0);
    const [throttleValue, setThrottleValue] = useState<T>(value);

    useEffect(() => {
        const now = Date.now()

        if (now - lastTime.current >= delay){
            lastTime.current = now
            setThrottleValue(value)
        } else {
            const timeout = setTimeout(() => {
                setThrottleValue(value)
                lastTime.current = Date.now()
            }, delay - (now - lastTime.current))

            clearTimeout(timeout)
        }
    },[value, delay])

    return throttleValue
}

export default useThrottle