import {useState, useLayoutEffect} from 'react';
/**
 * useWindowSize 获取窗口宽高
 */
export default () => {
    const [size, setSize] = useState({
        width: null,
        height: null
    })

    useLayoutEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return size;
}