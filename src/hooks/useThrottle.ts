import {useState, useRef, useEffect} from 'react';

export default (value, interval = 500) => {
    const [timeValue, setTimeValue] = useState(value);
    const lastUpdate = useRef(null);

    useEffect(() => {
        const now = Date.now();
        if (lastUpdate.current && now >= lastUpdate.current + interval) {
            lastUpdate.current = now;
            setTimeValue(value)
        } else {
            const id = setTimeout(() => {
                lastUpdate.current = now;
                setTimeValue(value)
            }, interval);
            return () => clearTimeout(id)
        }
    }, [value, interval])

    return timeValue
}