import { useState, useCallback, useEffect } from 'react'
import copy from 'copy-to-clipboard'

// custom hook wrapping copy-to-clipboard library
//  Props: 
//      resetInterval - number value in milliseconds for state value to reset, 
//                      defaults to null (or never timing out)
//  Returns:
//      array - [isCopied, handleCopy] { boolean, function }

export default function useCopyToClipboard(resetInterval = null) {
    const [isCopied, setCopied] = useState(false)

    // wrap in useCallback hook to ensure it is not recreated upon rerender
    const handleCopy = useCallback((text) => {
        if (typeof text === 'string' || typeof text === 'number') {
            copy(text.toString())
            setCopied(true)
        } else {
            console.error(
                "Cannot copy target with typeof ${typeof text} to clipboard; must be a string or number."
            )
            setCopied(false)
        }
    }, [])

    useEffect(() => {
        // use window setTimeout and clearTimeout to 
        let timeout
        if (isCopied && resetInterval) {
            timeout = setTimeout(() => setCopied(false), resetInterval)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [isCopied, resetInterval])

    return [isCopied, handleCopy]
}