import { useEffect, useRef, useState, useCallback } from "react";

const useThrottleCallback = <T extends (...arr: any[]) => void (callback : T, delay : number): ((...arg : Parameters<T>) => void) => {
    const timoutRef = useRef<ReturnType <typeof setTimeout> | null>(null);
    const lastTime = useRef<number>(0);

    const throttlefn = useCallback((...arg : Parameters<T>) => {
        const now = Date.now();
        const remaining = delay - (now - lastTime.current);
        
        if (remaining <= 0){
            callback(...arg);
            lastTime.current = now;
        } else if(!timoutRef.current){
            timoutRef.current = setTimeout(() => {
                callback(...arg);
                lastTime.current = Date.now()
                timoutRef.current = null
            }, remaining)

        }
    },[delay, callback])

    return throttlefn
}

export default useThrottleCallback